const mongoose = require('mongoose')

const { Schema } = mongoose

const productModel = Schema({
    productname: {
        type: String,
        require: true
    },
    description: {
        type: String,
        required: true
    },
    normaldiscount: {
        type: Number,
        required: true
    },
    independencediscount: {
        type: Number,
        required: true
    },
    categoryId: {
        type: Schema.Types.ObjectId,
        ref: 'productcategory',
        required:true
    } 
})

module.exports = mongoose.model('product', productModel)