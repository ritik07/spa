import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../constant";
import { Card, Col, Row } from "antd";
// import { PaytmButton } from "../../paytm-button/paytmButton";

const Cart = () => {
  let sum = 0;
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    getCartDetails();
  }, []);

  const getCartDetails = async () => {
    const payload = {
      user_id: JSON.parse(localStorage.getItem("user_id")),
      session_id: JSON.parse(localStorage.getItem("user_session")),
    };
    let cartResponse = await axios.post(
      BASE_URL + "cart/getcartdetail",
      payload
    );
    setCartItems(cartResponse.data.data);
    console.log("cartResponse", cartResponse);
  };

  return (
    <div>
      <Card>
        <Row>
          <Col xs={4}>No.</Col>

          <Col xs={4}>Name</Col>

          <Col xs={4}>Price</Col>

          <Col xs={4}>Qty.</Col>

          <Col xs={4}>Sub Total</Col>

          <Col xs={4}>Actions</Col>
        </Row>
      </Card>

      <Card>
        {cartItems.length ? (
          cartItems.map((item, index) => {
            return (
              <Row className="cs-tm-20" key={item.id}>
                <Col xs={4}>{index + 1}</Col>
                <Col xs={4}>Test</Col>
                <Col xs={4}>{item.price}</Col>
                <Col xs={4}>{item.quantity}</Col>
                <Col xs={4}>{item.total}</Col>

                <Col xs={4}>
                  <div className="txt-remove cs-dis-flex cs-vt-center">
                    REMOVE
                  </div>
                </Col>
              </Row>
            );
          })
        ) : (
          <Row>
            <Col xs={24}>
              <div className="cs-dis-flex cs-hrz-center cs-tm-40">
                No Items found.
              </div>
            </Col>
          </Row>
        )}
      </Card>
      {cartItems.length ? (
        <Card>
          <Row>
            <Col xs={18}>
              TOTAL = {" "}
              {cartItems.reduce((inital, item, index) => {
                sum += item.total;
                console.log("item", item);
                if (cartItems.length === index + 1) {
                  return sum;
                }
              }, 0)}
            </Col>
            <Col xs={6}>
              {/* <PaytmButton /> */}
            </Col>
          </Row>
        </Card>
      ) : null}
    </div>
  );
};

export default Cart;
