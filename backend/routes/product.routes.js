const express = require('express')
const route = express.Router()

const productController = require('../controller/product.controller')
const productCatController = require('../controller/productCategory.controller')

route.get('/product', productCatController.getproductCategory, productController.insertProduct)

route.get('/showproduct', productController.getProducts)

module.exports = route