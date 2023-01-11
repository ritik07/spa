import { Col, Row } from "antd";
import React from "react";
import Card from "../../component/card/card";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();
  const handleProduct = (id, product_slug) => {
    navigate(
      "/home/category/" +
        window.location.pathname.split("/")[3] +
        "/" +
        window.location.pathname.split("/")[4] +
        "/product/" +
        id +
        "/" +
        product_slug
    );
  };

  return (
    <div>
      <Row gutter={[12, 12]}>
        {Array(10)
          .fill()
          .map((item, index) => {
            return (
              <Col
                xs={12}
                key={index}
                onClick={() => handleProduct(index, "product_slug")}
              >
                <Card />
              </Col>
            );
          })}
      </Row>
    </div>
  );
};

export default Products;
