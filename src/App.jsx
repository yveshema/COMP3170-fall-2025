import { useEffect, useState } from 'react';

import Footer from "./components/Footer";
import AppHeader from "./components/AppHeader";
import Main from "./components/Main";
import Product from "./components/Product";
import Modal from './components/Modal';
import ProductForm from './components/ProductForm';
import ProductDetails from './components/ProductDetails';

import './App.css';
import './styles/menubar.css';
import './styles/popover.css';

import { sampleProducts } from './fixtures/products';

function initData() {
  const storedData = localStorage.getItem('products');

  if (storedData) return JSON.parse(storedData);
  else return {};
}

function App() {

  const [products, setProducts] = useState(initData().products || sampleProducts);

  function addProduct(product) {
    // setProducts([...products, product]);
    setProducts([product, ...products]);
  }

  function deleteProduct(id) {
    const updatedProducts = products.filter(product => product.id !== id);
    setProducts(updatedProducts);
  }

  function updateProduct(updatedProduct) {
    console.log(updatedProduct);
    const updatedProducts = products.map(product => {
      if (product.id === updatedProduct.id) return updatedProduct; // replace old version with updated version
      else return product;
    });
    setProducts(updatedProducts);
  }

  const categories = new Set(products.map(product => product.category));

  const [filter, setFilter] = useState('');

  const displayedProducts = filter === '' ?
    products
    : products.filter(product => product.category === filter);
  
  const [selected, setSelected] = useState(null); // either null or a product

  const getRelated = (product) => {
    return products.filter(p => p.category === product.category && p.id !== product.id);
  }

  const [cart, setCart] = useState(initData().cart || {});

  const addToCart = (product) => {
    setCart({ ...cart, [product.id]: { product, count: 1 } });
  }

  const cartSize = Object.keys(cart).length;

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify({ products, cart }));
  }, [products, cart]);

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
            <div className="popover-header">
              <h2>Your Shopping Cart</h2>
              <button popoverTarget='cart' popoverTargetAction='hide'>
                &#x2715;
              </button>
            </div>
            <div>
              {Object.values(cart).map(item => (
                <p>{item.product.name}: {item.count}</p>
              ))}
            </div>
          </div>
        </div>
      </AppHeader>

      <section id="content">
        {selected ? (
          <ProductDetails
            product={selected}
            related={getRelated(selected)}
            dismiss={() => setSelected(null)} />
        )
          : (
            <>
              <div className="menubar">
                <div>
                  <Modal type='create'>
                      <ProductForm add={addProduct} />
                  </Modal>
                </div>

                <div className="filter">
                  <p>Filter:</p> 
                  <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                    <option value="">All Categories</option>
                    {[...categories].map((category, index) => (
                      <option key={index} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
                
              </div>

              <Main>
                {displayedProducts.map(product => (
                  <Product
                    key={product.id}
                    product={product}
                    remove={deleteProduct}
                    update={updateProduct}
                    select={() => setSelected(product)}
                    addToCart={addToCart}
                  />
                ))}
              </Main>
            </>
        )}
      </section>
      <Footer />
    </div>
  )
}

export default App;
