import { useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import Footer from "./components/Footer";
import AppHeader from "./components/AppHeader";

import Cart from './components/Cart';

import './App.css';
import './styles/popover.css';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = 'https://my-json-server.typicode.com/yveshema/comp3170-inventory/products';

    async function fetchData() {
      setLoading(true);
      try {
        const resp = await fetch(url);

        if (!resp.ok) throw new Error(resp.status);

        const data = await resp.json();
        setProducts(data);

      } catch (e) {
        setError(e.message);
        console.error(e.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();

  }, []);

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  function addProduct(product) {
    setProducts([product, ...products ]);
  }

  function deleteProduct(id) {
    const updatedProducts = products.filter(product => product.id !== id);
    setProducts(updatedProducts);
  }

  function updateProduct(updatedProduct) {
    const updatedProducts = products.map(product => {
      if (product.id === updatedProduct.id) return updatedProduct; // replace old version of product
      else return product;
    });
    setProducts(updatedProducts);
  }

  // Filtering logic
  const categories = new Set(products.map(product => product.category));
  

  const [cart, setCart] = useState({});

  function addToCart(product) {
    setCart({ ...cart, [product.id]: { product, count: 1 } });
  }

  function removeFromCart(id) {
    delete cart[id];
    setCart({ ...cart });
  }

  function updateCart(product, count) {
    if (count < 1) {
      removeFromCart(product.id);
      return;
    }

    setCart({ ...cart, [product.id]: { product, count } });
  }

  function clearCart() {
    setCart({});
  }

  const cartSize = Object.keys(cart).length;

  const appContext = {
    products,
    addProduct,
    updateProduct,
    deleteProduct,
    categories,
    cart: Object.values(cart),
    addToCart,
    clearCart,
    loading,
    error,
  };

  return (
    <div className="app">
      <AppHeader>
        <div>
          <button className="icon-btn">
            <i className="bx bx-heart"></i>
          </button>
          <button className="icon-btn" popoverTarget='cart' popoverTargetAction='show'>
            <i className="bx bx-shopping-bag"></i> 
            {cartSize > 0 && <span className="badge">{cartSize}</span>}
          </button>

          <div id="cart" popover="auto" className="popover">
            <h2>Your shopping cart</h2>
            <Cart cart={cart} update={updateCart} remove={removeFromCart} />
          </div>

        </div>
      </AppHeader>

      <section id="content">
        <Outlet context={appContext} />
      </section>
      <Footer />
    </div>
  )
}

export default App;
