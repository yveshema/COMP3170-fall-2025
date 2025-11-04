import { useEffect, useState } from 'react';
import Footer from "./components/Footer";
import AppHeader from "./components/AppHeader";
import Main from "./components/Main";
import Product from "./components/Product";
import Modal from './components/Modal';
import ProductForm from './components/ProductForm';
import Menubar from './components/Menubar';
import ProductDetails from './components/ProductDetails';
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
            <Cart cart={cart} />
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
                {error ? <p>{error}</p>
                  : loading ? <p>Loading...</p>
                    : <>

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
                    </>
                }
              
            </Main>
          </>
      )}

        

      </section>
      <Footer />
    </div>
  )
}

export default App;
