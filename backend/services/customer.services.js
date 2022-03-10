const customerModel = require('../models/customer.model')

exports.insertCustomer = (req, res, next, custName, email, password, phone) => {
    const customer = new customerModel({
        name: custName,
        email: email,
        password: password,
        phonenumber: phone,
        cart: []
    })

    customer.save();
}

exports.incrementQuantity = async (req, res, next, productId, custId) =>{
    const data = await customerModel.updateOne({$and:[{_id:custId},{"cart._id":productId}]},{$inc:{"cart.$.quantity":1}})
    console.log(product)
}

exports.addToCart = async (req, res, next, productId, custId) => {
    const data = await customerModel.updateOne({_id:custId}, {$push:{cart:{_id:productId, quantity:1}}})
    res.send('product added to cart')
}
