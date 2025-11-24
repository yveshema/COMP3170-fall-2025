import { useContext } from 'react';
import { CheckoutContext } from '../contexts/checkoutContext';

export default function Order() {
    const { 
        cartItems,
        subTotal,
        gst,
        pst,
        total 
    } = useContext(CheckoutContext);

    return (
        <div className="order-summary">
            <div>
                <p>
                    <span>Subtotal</span>
                    <span>${subTotal.toFixed(2)}</span>
                </p>
                <p>
                    <span>Shipping</span>
                    <span>$0.00</span>
                </p>
                <p>
                    <span>GST</span>
                    <span>${gst.toFixed(2)}</span>
                </p>
                <p>
                    <span>PST</span>
                    <span>${pst.toFixed(2)}</span>
                </p>
                <p>
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                </p>
            </div>
            <div>
                {cartItems.map(item => (
                    <div key={item.product.id} className="cart-item">
                        <div className="cart-item-image">
                            <img src={item.product.image} alt="" />
                        </div>
                        <div className="cart-item-details">
                            <h3>{item.product.name}</h3>
                            <p>${(item.product.price * item.count).toFixed(2)}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}