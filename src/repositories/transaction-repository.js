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

    
}

module.exports = TransactionRepository;
