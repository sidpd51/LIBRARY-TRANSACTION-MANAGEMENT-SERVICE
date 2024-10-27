const TransactionRepository = require("../repositories/transaction-repository.js");
const { CATALOG_SERVICE } = require("../config/serverConfig.js");
const axios = require("axios");

class TransactionService {
    constructor() {
        this.transactionRepository = new TransactionRepository();
    }

    async create(data) {
        try {
            const item = await axios.get(
                `${CATALOG_SERVICE}/api/v1/books/${data.itemId}`
            );

            const itemData = item.data.data;
            let copiesTotal = itemData.copiesTotal;
            copiesTotal--;

            if (itemData.copiesTotal < 3) {
                console.log(itemData.copiesTotal);
                throw { err: "Copies are not available for borrowing" };
            }

            const transaction =
                await this.transactionRepository.createTransaction(data);

            await axios.patch(
                `${CATALOG_SERVICE}/api/v1/books/${data.itemId}`,
                {
                    copiesTotal: copiesTotal,
                }
            );

            return transaction;
        } catch (error) {
            console.log("something went wrong in service layer");
            throw error;
        }
    }

    async returnItem(transactionId) {
        try {
            const transaction = await this.transactionRepository.getTransaction(
                transactionId
            );
            //compare return date and due date
            let dueDate = new Date(transaction.dueDate);
            dueDate = dueDate.toLocaleDateString();
            let currentDate = new Date().toLocaleDateString();

            if (currentDate>dueDate) {
                //createfine logic
            }

            await this.transactionRepository.updateTransaction(transactionId,{
                returnDate: new Date(),
                transactionStatus: "RETURNED"
            })

            const item = await axios.get(`${CATALOG_SERVICE}/api/v1/books/${transaction.itemId}`)
            let copiesTotal = item.copiesTotal
            copiesTotal++

            await axios.patch(
                `${CATALOG_SERVICE}/api/v1/books/${transaction.itemId}`,
                {
                    copiesTotal: copiesTotal,
                }
            );
            return transaction

        } catch (error) {
            console.log("something went wrong in service layer");
            throw error;
        }
    }

    async getAll(){
        try {
            const transactions = await this.transactionRepository.getAllTransactions()
            return transactions
        } catch (error) {
            console.log("something went wrong in service layer")
            throw error
        }
    }
}

module.exports = TransactionService;
