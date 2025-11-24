import { useEffect, useReducer } from 'react';
import { Outlet, useLoaderData } from 'react-router';
import Footer from "./components/Footer";
import AppHeader from "./components/AppHeader";

import Cart from './components/Cart';

import { appReducer, initializeData } from './reducers/appReducer';

import './App.css';
import './styles/popover.css';

function App() {

  const data = useLoaderData();

  const [state, dispatch] = useReducer(appReducer, data, initializeData);

  const cartSize = Object.values(state.cart).length;

  useEffect(() => {
    localStorage.setItem('shopmart', JSON.stringify(state));
  }, [state]);

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
            <Cart cart={state.cart} dispatch={dispatch} />
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
