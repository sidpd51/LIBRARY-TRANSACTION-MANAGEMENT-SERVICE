const {
    borrowItem,
    returnItem
} = require('../../controllers/transaction-controller.js')

const express = require('express')


const router = express.Router()

router.post('/borrow',borrowItem)
router.patch('/return/:id',returnItem)

module.exports = router

