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
    products,
    addProduct,
    updateProduct,
    deleteProduct,
    addToCart,
    loading,
    error
  } = useOutletContext();

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
    </>
  );
}