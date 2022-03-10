const productModel = require('../models/product.model')
// https://mongoosejs.com/docs/populate.html

exports.insertProduct = (req, res, next, prodName, description, indDiscount, normalDiscount, cname) => {
    const product = productModel({
        productname: prodName,
        description: description,
        independencediscount: indDiscount,
        normaldiscount: normalDiscount,
        categoryId: req.cId._id
    })

    product.save()
}

exports.showProducts = (req, res, next)=>{
    productModel.find({}).populate('categoryId').exec((err, data)=>{
        if (err){
            console.log(err)
        }
        res.send(data)
    })
}


