import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

import Footer from "./components/Footer";
import AppHeader from "./components/AppHeader";
import Main from "./components/Main";
import Product from "./components/Product";
import Modal from './components/Modal';
import ProductForm from './components/ProductForm';

import './App.css';

const sampleProducts = [
  {
    name: "Running shoes",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Asics_Gel-Cumulus_22.jpg",
    price: "24",
    category: 'shoes',
    id: nanoid(),
  },
  {
    name: "Sport Jacket",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Polo_Ralph_Lauren_-_Sport_Coat.jpg",
    price: "109.99",
    category: 'jackets',
    id: nanoid(),
  },
  {
    name: "Running shoes",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Asics_Gel-Cumulus_22.jpg",
    price: "24",
    category: 'shoes',
    id: nanoid(),
  },
  {
    name: "Sport Jacket",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Polo_Ralph_Lauren_-_Sport_Coat.jpg",
    price: "109.99",
    category: 'jackets',
    id: nanoid(),
  },
  {
    name: "Running shoes",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Asics_Gel-Cumulus_22.jpg",
    price: "24",
    category: 'shoes',
    id: nanoid(),
  },
  {
    name: "Sport Jacket",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Polo_Ralph_Lauren_-_Sport_Coat.jpg",
    price: "109.99",
    category: 'jackets',
    id: nanoid(),
  },
];

function renderProduct(product, index) {
  return <Product {...product} key={index} />;
}

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


  return (
    <div className="app">
      <section id="content">
        <AppHeader />

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
            />
          ))}
        </Main>

      </section>
      <Footer />
    </div>
  )
}

export default App;
