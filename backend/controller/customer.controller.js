const customerService = require('../services/customer.services')

exports.createCustomer = async (req, res, next) => {
    n = "new user"
    e = "email"
    pa = "67890"
    p = 123456789

    try {
        await customerService.insertCustomer(req, res, next, n, e, pa, p)
    } catch (err) {
        console.log('data not inserted ' + err)
    }

    res.send('data inserted sucessfully')
}

exports.addTocartController = async (req, res, next)=>{
    // pid 6205128a4d590ca5fd36b8c0
    //cid 62074f202a57e974176830df
    try {
        await customerService.addToCart(req, res, next, req.body.prodId, req.body.custId)
    } catch (error) {
        console.log('product not added to cart')
    }
}
