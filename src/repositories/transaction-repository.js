const { Transaction } = require("../models/index.js");

class TransactionRepository {
    async createTransaction(data) {
        try {
            const transaction = await Transaction.create(data);
            return transaction;
        } catch (error) {
            console.log("something went wrong in repository layer");
            throw error;
        }
    }

    async updateTransaction(transactionId, data) {
        try {
            const transaction = await Transaction.update(data, {
                where: {
                    id: transactionId,
                },
            });
            if (transaction[0]) {
                return transaction[0];
            }

            throw { err: "transaction not found" };
        } catch (error) {
            console.log("something went wrong in repository layer");
            throw error;
        }
    }

    async getTransaction(transactionId) {
        try {
            const transaction = await Transaction.findByPk(transactionId);
            if (!transaction) {
                throw { err: "transaction not found" };
            }
            return transaction;
        } catch (error) {
            console.log("something went wrong in repository layer");
            throw error;
        }
    }

    async getAllTransactions(){
        try {
            const transactions = await Transaction.findAll({});
            if (!transactions) {
                throw { err: "transaction not found" };
            }
            return transactions;
        } catch (error) {
            console.log("something went wrong in repository layer");
            throw error;
        }
    }
}

module.exports = TransactionRepository;
