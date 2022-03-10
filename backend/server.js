const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config()

const customerRouter = require('./routes/customer.routes')
const productRouter = require('./routes/product.routes')
const productcatRouter = require('./routes/productCat.route')

const app = express()
const router = express.Router()

app.use(cors())
app.use(express.json())

const db = mongoose.connect(process.env.DBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(resolve => {
    console.log('connected to database successfully')
}).catch((err) => {
    console.log('no database to connect' + err)
})

app.use(customerRouter)
app.use(productRouter)
app.use(productcatRouter)

app.listen(process.env.PORT, () => {
    console.log(`server running on port ${process.env.PORT}`)
})
