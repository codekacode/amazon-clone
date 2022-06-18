import "./CheckoutProduct.css"

function CheckoutProduct({id, image, title, price, rating}) {
    return (
       <div className="checkoutProduct">
          <img className="checkoutProduct__image" src={image} alt=""/>
          <div className="checkoutProduct__info">
            <p className="checkoutProduct__title">{title}</p>
          <div className="checkoutProduct__rating">
            {Array(rating).fill().map((_, i) => (
               <p>🌟</p>
            ))}
          </div>
          <button>Remove from Basket</button>
          </div>
       </div> 
    )
}

export default CheckoutProduct