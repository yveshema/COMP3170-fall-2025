import { useNavigate } from 'react-router';

import '../styles/cart.css';

function round(num) {
  return num.toFixed(2);
}

export default function Cart({ cart, dispatch }) {
  const cartItems = Object.values(cart); // cart item contains product and count

  const numItems = cartItems.reduce((acc, item) => acc + item.count, 0);

  const subTotal = cartItems.reduce((acc, item) => acc + (item.product.price * item.count), 0);

  const navigate = useNavigate();

  function update(product, count) {
    dispatch({
      type: 'updated-cart-item',
      payload: { product, count }
    });
  }

  function remove(id) {
    dispatch({
      type: 'deleted-cart-item',
      payload: { id }
    });
  }

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
              <button onClick={() => remove(item.product.id)}>
                <i className="bx bx-trash"></i>
              </button>
            </div>

            <div>
              <div className="spinner">
                <span onClick={() => update(item.product, item.count - 1)}>
                  <i className="bx bx-minus"></i>
                </span>
                <span>{item.count}</span>
                <span onClick={() => update(item.product, item.count + 1)}>
                  <i className="bx bx-plus"></i>
                </span>
              </div>

              <span>${round(item.product.price * item.count)}</span>
            </div>
          </div>

        </div>
      ))}

      <div className="cart-footer">
        <div>
          <p>Subtotal ({numItems} items )</p>
          <p>${round(subTotal)}</p>
        </div>
        <button
          className="btn primary"
          popoverTarget='cart'
          popoverTargetAction='hide'
          onClick={() => navigate("checkout") }
        >
          Proceed to checkout
        </button>
      </div>
    </div>
  )
}