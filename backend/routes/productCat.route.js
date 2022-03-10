const express = require('express')
const { model } = require('mongoose')
const route = express.Router()

const productCatCont = require('../controller/productCategory.controller')

route.get('/category', productCatCont.inseRtProdCAT)

module.exports = route