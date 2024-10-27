const express = require('express')
const transactionRoutes = require('./v1/transaction-route.js')

const router = express.Router()

router.use('/v1/',transactionRoutes)

module.exports = router