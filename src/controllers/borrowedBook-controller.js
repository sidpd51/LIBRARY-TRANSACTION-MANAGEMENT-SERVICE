const {BorrowedBookService} = require('../services/borrowedBook-service')

const borrowedBookService = new BorrowedBookService()

const create = async (req,res)=>{
    try {
        const transaction = await borrowedBookService.createBook(req.body);

        return res.status(201).json({
            data: transaction,
            success: true,
            message: "Successfully borrowed the book!",
            err: {},
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to borrow the book!",
            err: error,
        });
    }
}

module.exports = {
    create
}