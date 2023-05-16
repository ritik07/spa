import { Button, Col, Row } from "antd";
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { BASE_URL, BASE_URL_ASSET } from "../../constant";

const Product = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  console.log("data", state);
  const {
    name,
    image,
    price,
    mrp,
    short_description,
    description,
    product_id,
    product_image,
  } = state;
  const redirectToLogin = () => {
    if (
      !JSON.parse(localStorage.getItem("user_id")) ||
      !JSON.parse(localStorage.getItem("user_session"))
    ) {
      navigate("/");
      return true;
    } else {
      return false;
    }
  };

  const handleOnBuy = () => {
    if (!redirectToLogin()) {
      navigate("/cart");
    }
    // navigate(
    //   `/home/category/${window.location.pathname.split("/")[3]}/${
    //     window.location.pathname.split("/")[4]
    //   }/product/${window.location.pathname.split("/")[6]}/${
    //     window.location.pathname.split("/")[7]
    //   }/purchase`
    // );
  };
  const handleOnAddToCart = async () => {
    if (!redirectToLogin()) {
      const payload = {
        product_id: product_id,
        price: price,
        user_id: JSON.parse(localStorage.getItem("user_id")),
        session_id: JSON.parse(localStorage.getItem("user_session")),
        quantity: 1,
      };
      let result = await axios.post(BASE_URL + "cart/addtocart", payload);
      console.log("result", result);
    }
  };

  return (
    <div>
      <Row>
        <Col span={12}>
          <img className="cs-w-max p-5" src={BASE_URL_ASSET + "/" + product_image} />
        </Col>
        <Col span={12}>
          <div className="cs-product-name cs-notation">{name}</div>

          <div>{description}</div>
          <div>
            <h2 className="cs-mrp">Rs {mrp}</h2>
          </div>
          <div>
            <h2>Rs {price}</h2>
          </div>
        </Col>
      </Row>

      <Row className="cs-mt-30">
        <Col span={24}>
          <div className="cs-float-right cs-dis-flex">
            <Button onClick={handleOnBuy}>Buy now</Button>
            <Button onClick={handleOnAddToCart} style={{ marginLeft: 10 }}>
              Add to cart
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Product;
