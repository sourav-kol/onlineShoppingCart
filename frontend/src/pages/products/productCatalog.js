import { Top } from "../../layouts/top-jumbo";
import { ProductItems } from "../../components/productItems";
import { api } from "../../API/baseURL.api";
import { Button } from "../../components/buttons/primary-btn";
import { AddToCart } from "../../logic/addToCartRequest";

import { useState, useEffect } from 'react'

export function ProductCatalog() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        api.get('showproduct')
            .then(response => {
                // console.log(response.data)
                setProducts(response.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    //custId will be set when user login. for now there is not user login feature.
    return (
        <>
            <Top></Top>
            <div className="catalog">
                {
                    products.length !== 0 ? products.map(items => {
                        return <ProductItems productdetails={items}>
                            <Button classList="" value="add to cart" action={()=>AddToCart(items._id, "62074f202a57e974176830df")}></Button>
                        </ProductItems>
                    }) : <span>no data found...</span>
                }
            </div>
        </>
    );
}
