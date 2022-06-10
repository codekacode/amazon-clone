
function Product({rating}) {
    return (
        <div className="product">
            <div className="product__info">
                <p>Titulo</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>11.99</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => (
                        <p>🌟</p>
                    ))}
                </div>
            </div>
            <button>Add to Basket</button>
        </div>
    )
}

export default Product