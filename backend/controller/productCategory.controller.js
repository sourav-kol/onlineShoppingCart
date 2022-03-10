const productCatservices = require('../services/productCategory.services')

exports.inseRtProdCAT = (req, res, next) => {
    try {
        productCatservices.insertProductCat("home appliances", 100, 10)
        res.send('category inserted')
    } catch (error) {
        console.log('category not inserted ' + err)
    }
}

exports.getproductCategory = async (req, res, next) => {
    try {
        id = await productCatservices.getId(req, res, next, "home appliances")
    } catch (err) {
        console.log('no documents found here')
    }
}