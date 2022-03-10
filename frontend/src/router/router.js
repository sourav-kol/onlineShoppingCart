import { ProductCatalog } from "../pages/products/productCatalog"
import { Layout } from "../layouts/body-layout";
import { Cart } from "../pages/cart/cart";

import { Routes, Route } from 'react-router-dom'

export function RouterConfig() {
    return (
        <Routes>
            <Route exact path="/" element={<Layout><ProductCatalog /></Layout>}></Route>
            <Route path="/product" element={<Layout><ProductCatalog /></Layout>}></Route>
            <Route path="/cart" element={<Layout><Cart /></Layout>}></Route>
        </Routes>
    );
}
