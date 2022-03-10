// https://mongoosejs.com/docs/schematypes.html

const mongoose = require('mongoose')

const { Schema } = mongoose

const customer = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phonenumber: {
        type: Number
    },
    cart: [{
        prodId: {
            type: Schema.Types.ObjectId,
            refs: 'product'
        },
        quantity: {
            type: Number,
            default: 1
        }
    }]
})

module.exports = mongoose.model("customer", customer);