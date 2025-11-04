import '../styles/cart.css';

export default function Cart({ cart }) {
  const cartItems = Object.values(cart); // cart item contains product and count

  return (
    <div className="cart">
      {cartItems.map(item => (
        <div key={item.product.id} className="cart-item">
          
          <div className="cart-item-image">
            <img src={item.product.image} alt="" />
          </div>

          <div className="cart-item-details">
            <div>
              <h3>{item.product.name}</h3>
              <button><i className="bx bx-trash"></i></button>
            </div>

            <div>
              <div className="spinner">
                <span><i className="bx bx-minus"></i></span>
                <span>{item.count}</span>
                <span><i className="bx bx-plus"></i></span>
              </div>

              <span>${item.product.price * item.count}</span>
            </div>
          </div>

        </div>
      ))}
    </div>
  )
}