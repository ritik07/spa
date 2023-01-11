import "antd/dist/antd.css";
import "./static/style/main.css";
import { Route, Routes } from "react-router-dom";
import LayoutWrapper from "./layout/Layout";
import Dashboard from "./page/dashboard/Dashboard";
import Products from "./page/products";
import Product from "./page/product";
import Purchase from "./page/purchase";
import Login from "./page/login/login";
import Signup from "./component/signup/signup";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Cart from "./page/cart/cart";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user_id")) {
      navigate("/home");
    }
  }, []);
  return (
    <div>
      <Routes>
        <Route path="/" element={<LayoutWrapper />}>
          <Route index element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Dashboard />} />
          <Route
            path="/home/category/:id/:category_slug"
            element={<Products />}
          />
          <Route
            path="/home/category/:id/:category_slug/product/:id/:product_slug"
            element={<Product />}
          />
          <Route
            path="/home/category/:id/:category_slug/product/:id/:product_slug/purchase"
            element={<Purchase />}
          />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
