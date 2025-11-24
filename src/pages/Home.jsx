import { useState } from 'react';
import { useOutletContext } from 'react-router';

import Main from "../components/Main";
import Product from "../components/Product";
import Modal from '../components/Modal';
import ProductForm from '../components/ProductForm';
import Menubar from '../components/Menubar';
import ProductDetails from '../components/ProductDetails';

export default function Home() {
  const {
<<<<<<< HEAD
    products,
    categories,
    addProduct,
    deleteProduct,
    updateProduct,
    loading,
    error,
    addToCart,
  } = useOutletContext();

=======
    state: { products },
    dispatch,
    loading
  } = useOutletContext();

  const categories = new Set(products.map(p => p.category));

>>>>>>> D3-G/week13/demo
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
<<<<<<< HEAD
                <ProductForm add={addProduct} />
=======
                <ProductForm add={(product) => dispatch({ type: 'added-product', payload: { product }}) } />
>>>>>>> D3-G/week13/demo
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
<<<<<<< HEAD
                {error ? <p>{error}</p>
                  : loading ? <p>Loading...</p>
=======
                {loading ? <p>Loading...</p>
>>>>>>> D3-G/week13/demo
                    : <>

                      {displayedProducts.map(product => (
                        <Product 
                          key={product.id}
                          product={product}
<<<<<<< HEAD
                          remove={deleteProduct}
                          update={updateProduct}
                          select={() => setSelected(product)}
                          addToCart={() => addToCart(product)}
=======
                          remove={() => dispatch({ type: 'deleted-product', payload: { id: product.id }})}
                          update={(p) => dispatch({ type: 'updated-product', payload: { product: p }})}
                          select={() => setSelected(product)}
                          addToCart={() => dispatch({ type: 'added-cart-item', payload: { product }})}
>>>>>>> D3-G/week13/demo
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