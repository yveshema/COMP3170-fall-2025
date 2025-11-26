import Main from "../components/Main";
import Product from "../components/Product";
import Modal from '../components/Modal';
import ProductForm from '../components/ProductForm';
import Menubar from '../components/Menubar';
import ProductDetails from '../components/ProductDetails';

import { useOutletContext } from "react-router";
import { useState } from 'react';

export default function Home() {

  const {
    state,
    dispatch,
    loading
  } = useOutletContext();

  const { products } = state;

  const categories = new Set(products.map(product => product.category));
  const [filter, setFilter] = useState('');

  const displayedProducts = filter === '' ?
    products
    : products.filter(product => product.category === filter);
  
  const [selected, setSelected] = useState(null);

  function getRelated(product) {
    return products.filter(p => p.category === product.category && p.id !== product.id)
  }

  return (
    <>
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
              <ProductForm add={(product) => dispatch({ type: 'added-product', payload: { product }})} />
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
              {loading ? <p>Loading...</p>
                  : <>

                    {displayedProducts.map(product => (
                      <Product 
                        key={product.id}
                        product={product}
                        remove={() => dispatch({ type: 'deleted-product', payload: { id: product.id }})}
                        update={(p) => dispatch({ type: 'updated-product', payload: { product: p }})}
                        select={() => setSelected(product)}
                        addToCart={() => dispatch({ type: 'added-cart-item', payload: { product }})}
                      />
                    ))}
                  </>
              }
            
          </Main>
          </>
      )}
    </>
  );
}