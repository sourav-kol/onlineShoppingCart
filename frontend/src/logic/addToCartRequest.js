import { api } from "../API/baseURL.api";

export function AddToCart(productId, customerId){
    api.post('/addtocart', {prodId: productId, custId:customerId})
    .then(resolve => {
        console.log('product inserted to cart sucessfully')
        window.location = "/cart"
    })
    .catch(error=>{
        console.log('product not added to cart')
    })
}