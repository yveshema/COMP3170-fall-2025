import { useEffect, useState, useReducer } from 'react';
import Footer from "./components/Footer";
import AppHeader from "./components/AppHeader";

import Cart from './components/Cart';

import { Outlet, useLoaderData } from 'react-router';

import { appReducer, initializeState } from './reducers/appReducer';

import './App.css';
import './styles/popover.css';

function App() {
  const data = useLoaderData(); // get data from API

  const [state, dispatch] = useReducer(appReducer, data, initializeState);

  useEffect(() => {
    localStorage.setItem('shopmart', JSON.stringify(state));
  }, [state]);

  const cartSize = Object.keys(state.cart).length;

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
              <h2>Your shopping cart</h2>
              <button popoverTarget='cart' popoverTargetAction='hide'>
                &#x2715;
              </button>
            </div>
            <Cart
              cart={state.cart}
              dispatch={dispatch}
            />
          </div>

        </div>
      </AppHeader>

      <section id="content">
        
        <Outlet context={{ state, dispatch, loading: data.isLoading }} />
        

      </section>
      <Footer />
    </div>
  )
}

export default App;
