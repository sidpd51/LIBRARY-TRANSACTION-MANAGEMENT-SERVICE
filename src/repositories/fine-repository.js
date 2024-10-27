const { Fine} = require('../models/index.js')


class FineRepository{
    async create(data){
        try {
            const fine = await Fine.create(data)
            return fine;
        } catch (error) {
            console.log("something went wrong in repository layer!")
            return error
        }
    }
}

module.exports = FineRepository