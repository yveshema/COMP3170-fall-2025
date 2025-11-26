import { useContext } from 'react';

import { useNavigate } from 'react-router';

import { CheckoutContext } from '../contexts/checkoutContext';

export default function CheckoutForm() {
  const { clearCart } = useContext(CheckoutContext);

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    clearCart();

    navigate("success");
  }

  return (
    <form className="checkout-form" onSubmit={handleSubmit}>
      <section className="checkout-contact">
        <h2>Contact Information</h2>
        <div>
          <p>
            <label>Full name:</label>
            <input type="text" placeholder="Jane Ellen" />
          </p>
          <p>
            <label>Email:</label>
            <input type="text" placeholder="me@example.com" />
          </p>
        </div>
      </section>

      <section className="checkout-payment">
        <h2>Payment Information</h2>
        <div>
          <p>
            <label>Cardholder's name</label>
            <input type="text" placeholder="Cardholder's name" />
          </p>
          <p>
            <label>Card number</label>
            <input type="text" placeholder="0000 0000 0000 0000" />
          </p>
          <div>
            <p className="expiration">
              <label>Expiration</label>
              <span>
                <input type="text" size="6" maxLength="2" placeholder="MM" />
                <input type="text" size="6" maxLength="4" placeholder="YYYY" />
              </span>
            </p>
            <p>
              <label>CVC/CVV</label>
              <input type="text" size="6" maxLength="3" placeholder="CVC/CVV" />
            </p>
          </div>
        </div>
      </section>
      <section>
        <p>By clicking "Confirm payment" I agree to the company's Terms of Service</p>
        <button type="submit">Confirm payment</button>
      </section>
    </form>
  );
}