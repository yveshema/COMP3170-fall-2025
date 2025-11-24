import { useContext } from 'react';
import { CheckoutContext } from '../contexts/checkoutContext';
import { useNavigate } from 'react-router';

export default function CheckoutForm() {
    const { clearCart } = useContext(CheckoutContext);

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();

        clearCart();

        navigate('success');
    }

    return (
        <form className="checkout-form" onSubmit={handleSubmit}>
            <section className="checkout-contact">
                <h2>Contact Information</h2>
                <div>
                    <p>
                        <label>Full name:</label>
                        <input type="text" placeholder="John Smith" />
                    </p>
                    <p>
                        <label>Email address:</label>
                        <input type="text" placeholder="me@example.com" />
                    </p>
                </div>
            </section>
            <section className="checkout-payment">
                <h2>Payment Information</h2>
                <div className="payment-options">
                    <button type="button">Card</button>
                    <button type="button">Paypal</button>
                </div>
                <div>
                    <p>
                        <label>Cardholder's name</label>
                        <input type="text" placeholder="Cardholder's name" />
                    </p>
                    <p>
                        <label>Card number:</label>
                        <input type="text" placeholder="0000 0000 0000 0000" />
                    </p>
                </div>
                <div>
                    <div className="expiration">
                        <p>
                            <label>Expiration</label>
                            <span>
                                <input type="text" maxLength="2" placeholder="MM" />
                                <input type="text" maxLength="4" placeholder="YYYY" />
                            </span>
                        </p>
                        <p>
                            <label>CVC/CVV</label>
                            <input type="text" maxLength="3" placeholder="CVC/CVV" />
                        </p>
                    </div>
                </div>
            </section>
            <section>
                <p>By clicking "Confirm payment" I agree to the Company's Terms of Service</p>
                <button type="submit">Confirm payment</button>
            </section>
        </form>
    );
}
