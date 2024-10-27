const {
    createTransaction
} = require('../../controllers/transaction-controller.js')

const express = require('express')


const router = express.Router()

router.post('/transactions',createTransaction)

module.exports = router

