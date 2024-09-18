import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import User from "./components/User/User.jsx";
import GitHub, { githubLoader } from "./components/GitHub/GitHub.jsx";
import { Provider } from "react-redux";
import { store } from "./store.js";
import Product from "./components/products/Product.jsx";
import Cart from "./components/cart/Cart.jsx";

// const router=createBrowserRouter([
//   {
//     path:"/",
//     element:<Layout/>,
//     children:[
//       {
//         path:"/",
//         element:<Home/>
//       },
//       {
//         path:"/about",
//         element:<About/>
//       }
//     ]
//   }
// ])

// or other way to create route

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      {/* <Route path='/contact' element={<Home/>}/> */}

      <Route path="user/:userId" element={<User />} />
      {/* <Route path='github' element={<GitHub/>}/> */}
      <Route path="github" loader={githubLoader} element={<GitHub />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <App /> */}
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
