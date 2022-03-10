const express = require('express')
const router = express.Router()

const customerController = require('../controller/customer.controller')

router.get('/customer',customerController.createCustomer)
router.post('/addtocart', customerController.addTocartController)

module.exports = router
