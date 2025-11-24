<<<<<<< HEAD
export default function Checkout() {
  return <h1>Checkout Page</h1>;
=======
import { useOutletContext } from "react-router";

import { CheckoutContext } from "../contexts/checkoutContext";

import Order from "../components/Order";
import CheckoutForm from "../components/CheckoutForm";

import '../styles/checkout.css';

export default function Checkout() {

  const { state: { cart }, dispatch } = useOutletContext();

  const cartItems = Object.values(cart);

  const subTotal = cartItems.reduce((acc, item) => acc + (item.product.price * item.count), 0);

  const gst = subTotal * 0.05;
  const pst = subTotal * 0.07;
  const total = subTotal + gst + pst;

  const clearCart = () => dispatch({ type: 'cleared-cart' });

  return (
    <>
      <h1>Checkout</h1>
      <div className="checkout">
        <CheckoutContext value={{ cartItems, subTotal, gst, pst, total, clearCart }}>
          <Order />
          <CheckoutForm />
        </CheckoutContext>
      </div>
    </>
  );
>>>>>>> D3-G/week13/demo
}