const { TransactionService } = require("../services/index.js");

const transactionService = new TransactionService();

const borrowItem = async (req, res) => {
    try {
        const transaction = await transactionService.borrowItem(req.body);
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
};

const returnItem = async (req, res) => {
    try {
        const transaction = await transactionService.returnItem(req.params.id);
        return res.status(201).json({
            data: transaction,
            success: true,
            message: "Successfully returned the item!",
            err: {},
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to return the item!",
            err: error,
        });
    }
};
const getAllTransactions = async (req, res) => {
    try {
        const transactions = await transactionService.getAll();
        return res.status(201).json({
            data: transactions,
            success: true,
            message: "Successfully got all transactions!",
            err: {},
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to get the transactions!",
            err: error,
        });
    }
};
module.exports = {
    borrowItem,
    returnItem,
    getAllTransactions,
};
