const BorrowedBookRepository = require("../repositories/borrowedBook-repository");

class BorrowedBookService {
    constructor() {
        this.borrowedBookRepository = new BorrowedBookRepository();
    }
    async create(data) {
        try {
            const transaction =
                await this.borrowedBookRepository.createTransaction(data);
            return transaction;

        } catch (error) {
            console.log("something went wrong in service layer");
            console.log(error);
            throw { error };
        }
    }
}

module.exports = BorrowedBookService;
