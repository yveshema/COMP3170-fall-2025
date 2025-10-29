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

import { sampleProducts } from './fixtures/products';

function App() {

  const [products, setProducts] = useState(() => {
    const storedData = localStorage.getItem('products');

    if (storedData) return JSON.parse(storedData);
    else return sampleProducts;
  });

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

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

  return (
    <div className="app">
      <AppHeader>
        <div>
          <button className="icon-btn">
              <i className="bx bx-heart"></i>
          </button>
          <button className="icon-btn">
              <i className="bx bx-shopping-bag"></i>
          </button>
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
                  <Modal btnLabel="New" btnClassName="btn primary">
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
