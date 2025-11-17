import { createBrowserRouter, RouterProvider } from "react-router";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Layout from "./pages/Layout";
import AllUsers from "./pages/AllUsers";
import UserDetails, { loader } from "./pages/UserDetails";

const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      { path: "/", Component: Home },
      { path: "/about", Component: About },
      { path: "/contact", Component: Contact },
      {
        path: "users",
        children: [
          { index: true, Component: AllUsers }, // url = "/users"
          { path: ":id", Component: UserDetails, loader: loader } // url = "/users/1" 
        ]
      },
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
