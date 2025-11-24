import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

import { createBrowserRouter, RouterProvider } from 'react-router';

import Home from './pages/Home';
import About from './pages/About';
import Catalog from './pages/Catalog';
import Checkout from './pages/Checkout';
import Success from './pages/Success';

<<<<<<< HEAD
const router = createBrowserRouter([
  {
    Component: App,
=======
import { fetchProducts } from './reducers/appReducer.js';

const router = createBrowserRouter([
  {
    Component: App,
    loader: async () => {
      return await fetchProducts();
    },
>>>>>>> D3-G/week13/demo
    children: [
      { index: true, Component: Home }, // url -> "/"
      { path: "about", Component: About }, // url -> "/about"
      { path: "catalog", Component: Catalog }, // url -> "/catalog"
      {
        path: "checkout",
        children: [
          { index: true, Component: Checkout }, // url -> "/checkout"
          { path: "success", Component: Success } // url -> "/checkout/success"
        ]
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
