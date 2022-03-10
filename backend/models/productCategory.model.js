const mongoose = require('mongoose')

const {Schema} = mongoose

const productCatSchema = new Schema({
    category:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    }
    //can keep array of all the products under each category
})

module.exports = mongoose.model('productcategory', productCatSchema)