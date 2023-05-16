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
import Policy from "./page/privacy-policy/policy";
import ContactUs from "./page/contact-us/contactus";
import Refund from "./page/privacy-policy/refund";
import Shipping from "./page/privacy-policy/shipping";
import Terms from "./page/terms";

function App() {
  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  useEffect(() => {
    loadScript("https://checkout.razorpay.com/v1/checkout.js");
  }, []);
  return (
    <div>
      <Routes>
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/privacy-policy" element={<Policy />} />
        <Route path="/refund" element={<Refund />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/" element={<LayoutWrapper />}>
          <Route path="" element={<Login />} />
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
          <Route path="/termsandcondition" element={<Terms />} />
        </Route>
        <Route path="/privacy-policy" element={<Policy />} />
      </Routes>
    </div>
  );
}

export default App;
