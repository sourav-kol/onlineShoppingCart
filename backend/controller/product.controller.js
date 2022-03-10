const productService = require('../services/product.service')

exports.insertProduct = (req, res, next) => {
    try {
        productService.insertProduct(req, res, next, "microwave", "this is for baking food", 10, 20, 'home appliances')
        res.send('product inserted')
    } catch (err) {
        console.log('data not inserted ' + err)
    }
}

exports.getProducts = (req, res, next) =>{
    try{
        productService.showProducts(req, res, next)
    }catch(err){
        console.log('no  data to display')
    }
}
