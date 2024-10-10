const { BorrowedBook } = require("../models/index");

class BorrowedBookRepository {
    async createTransaction(data) {
        try {
            const transaction = await BorrowedBook.create(data);
            return transaction;
        } catch (error) {
            console.log("something went wrong in repository layer");
            console.log(error);
            throw { error };
        }
    }
}

module.exports = BorrowedBookRepository;
