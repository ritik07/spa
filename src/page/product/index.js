import { Button, Col, Row } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../constant";

const Product = () => {
  const navigate = useNavigate();
  const handleOnBuy = () => {
    navigate("/cart");
    // navigate(
    //   `/home/category/${window.location.pathname.split("/")[3]}/${
    //     window.location.pathname.split("/")[4]
    //   }/product/${window.location.pathname.split("/")[6]}/${
    //     window.location.pathname.split("/")[7]
    //   }/purchase`
    // );
  };
  const handleOnAddToCart = async () => {
    const payload = {
      product_id: 4315,
      price: 50,
      user_id: 33,
      session_id: JSON.parse(localStorage.getItem("user_session")),
      quantity: 1,
    };
    let result = await axios.post(BASE_URL + "cart/addtocart", payload);
    console.log("result", result);
  };

  return (
    <div>
      <Row>
        <Col span={12}>
          <img
            className="cs-w-max"
            src="https://cdn.shopify.com/s/files/1/0100/6128/3392/products/Manisha-2021-09-07T172432.780.jpg?v=1642805323"
          ></img>
        </Col>
        <Col span={12}>
          <div className="cs-product-name cs-notation">Product name</div>

          <div>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
          </div>

          <div>
            <h2>Rs 499</h2>
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
