import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import './index.css';
import App from './App.jsx';

import Home from './pages/Home.jsx';
import Catalog from './pages/Catalog.jsx';
import About from './pages/About.jsx';
import Checkout from './pages/Checkout.jsx';
import Success from './pages/Success.jsx';

import { fetchProducts } from './reducers/appReducer.js';

const router = createBrowserRouter([
  {
    Component: App,
    loader: async () => {
      return fetchProducts();
    },
    children: [
      { index: true, Component: Home }, // url -> "/"
      { path: "catalog", Component: Catalog }, // url -> "/catalog"
      { path: "about", Component: About },  // url -> "/about"
      {
        path: "checkout",
        children: [
          { index: true, Component: Checkout }, // url -> "/checkout"
          { path: "success", Component: Success } // url -> "/checkout/success"
        ]
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
