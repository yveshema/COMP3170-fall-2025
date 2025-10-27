import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

import Footer from "./components/Footer";
import AppHeader from "./components/AppHeader";
import Main from "./components/Main";
import Product from "./components/Product";

import './App.css';


const initialData = [
  {
    name: "Running shoes",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Asics_Gel-Cumulus_22.jpg",
    price: "24",
    id: nanoid(),
  },
  {
    name: "Sport Jacket",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Polo_Ralph_Lauren_-_Sport_Coat.jpg",
    price: "109.99",
    id: nanoid(),

  },
  {
    name: "Running shoes",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Asics_Gel-Cumulus_22.jpg",
    price: "24",
    id: nanoid(),
  },
  {
    name: "Sport Jacket",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Polo_Ralph_Lauren_-_Sport_Coat.jpg",
    price: "109.99",
    id: nanoid(),
  },
  {
    name: "Running shoes",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Asics_Gel-Cumulus_22.jpg",
    price: "24",
    id: nanoid(),
  },
  {
    name: "Sport Jacket",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Polo_Ralph_Lauren_-_Sport_Coat.jpg",
    price: "109.99",
    id: nanoid(),
  },
];


function App() {
  const [products, setProducts] = useState(() => {
    const storedProducts = localStorage.getItem('products');

    if (storedProducts) return JSON.parse(storedProducts);
    else return initialData;
  });

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  function addProduct(product) {
    setProducts([...products, product]);
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

  return (
    <div className="app">
      <section id="content">
        <AppHeader add={addProduct} />

        <div style={{ padding: '0 2rem' }}>
          <span style={{ marginRight: '1rem'}}>Categories: </span>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="">All</option>
            {[...categories].map((category, index) => (
              <option key={index} value={category}>{category}</option>
            ))}
          </select>
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
