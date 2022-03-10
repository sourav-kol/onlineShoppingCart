const productCatModel = require('../models/productCategory.model')

exports.insertProductCat = (category, price, quantity) => {
    const prodCat = productCatModel(
        {
            category: category,
            price: price,
            quantity: quantity
        }
    )

    prodCat.save()
}

exports.getId = (req, res, next, cname) => {
    const id = productCatModel.findOne({
        category: cname
    }, (err, data) => {
        req.cId = data
        next()
    })
}