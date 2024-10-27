const {
    borrowItem,
    returnItem,
    getAllTransactions
} = require('../../controllers/transaction-controller.js')

const express = require('express')


const router = express.Router()

router.post('/borrow',borrowItem)
router.patch('/return/:id',returnItem)
router.get('/',getAllTransactions)

module.exports = router

