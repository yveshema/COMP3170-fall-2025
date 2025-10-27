import { useEffect, useState } from 'react';
import Footer from "./components/Footer";
import AppHeader from "./components/AppHeader";
import Main from "./components/Main";
import Product from "./components/Product";
import Modal from './components/Modal';
import ProductForm from './components/ProductForm';
import Menubar from './components/Menubar';
import ProductDetails from './components/ProductDetails';

import './App.css';
import './styles/popover.css';

import { sampleProducts } from './fixtures/products.js';

function App() {
  const [products, setProducts] = useState(() => {
    const storedProducts = localStorage.getItem('products');

    if (storedProducts) return JSON.parse(storedProducts);
    else return sampleProducts;
  });

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
  const [filter, setFilter] = useState('');

  const displayedProducts = filter === '' ?
    products
    : products.filter(product => product.category === filter);
  
  const [selected, setSelected] = useState(null);

  function getRelated(product) {
    return products.filter(p => p.category === product.category && p.id !== product.id)
  }

  const [cart, setCart] = useState({});

  function addToCart(product) {
    setCart({ ...cart, [product.id]: { product, count: 1 } });
  }

  const cartSize = Object.keys(cart).length;

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
            {Object.values(cart).map(item => <p>{item.product.name}</p>)}
          </div>

        </div>
      </AppHeader>

      <section id="content">
        {selected ?
        (
            <ProductDetails
              product={selected}
              related={getRelated(selected)}
              dismiss={() => setSelected(null)} />
        ) 
          :
        (
          <>
            <Menubar>
              <Modal type="create">
                <ProductForm add={addProduct} />
              </Modal>

              <div style={{ padding: '0 2rem' }}>
                <span style={{ marginRight: '1rem'}}>Categories: </span>
                <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                  <option value="">All</option>
                  {[...categories].map((category, index) => (
                    <option key={index} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </Menubar>

            <Main>
              {displayedProducts.map(product => (
                <Product 
                  key={product.id}
                  product={product}
                  remove={deleteProduct}
                  update={updateProduct}
                  select={() => setSelected(product)}
                  addToCart={() => addToCart(product)}
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
