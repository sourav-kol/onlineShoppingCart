export function ProductItems({ productdetails, children }) {
    return (
        <div className="product-item ">
            <div className="image card">
                <img src="" alt="items"></img>
            </div>
            <div className="details card">
                <h3 className="name">{productdetails.productname}</h3>
                <p className="description">{productdetails.description} </p>
                {children}
                <span className="price">${productdetails.categoryId.price}</span>
            </div>
        </div>
    );
}
