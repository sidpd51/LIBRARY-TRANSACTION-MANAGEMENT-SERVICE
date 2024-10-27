const { TransactionService } = require('../services/index.js')

const transactionService = new TransactionService()

async function createTransaction(req,res) {
    try {
        const transaction = await transactionService.create(req.body)
        return res.status(201).json({
            data: transaction,
            success: true,
            message: "Successfully created the transaction!",
            err: {},
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to create a transaction!",
            err: error,
        });
    }
}

module.exports = {
    createTransaction
}