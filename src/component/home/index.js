import React from "react";
import Card from "../card/card";
import { Col, Row } from "antd";
import Banner from "../banner/banner";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleCateogry = (id, categoryName) => {
    navigate("/home/category/" + id + "/" + categoryName);
  };

  return (
    <div>
      <div className="cs-m-10">
        <Banner />
      </div>
      {/* Category */}
      <div className="cs-notation cs-bm-5">Category</div>
      <Row gutter={[12, 12]}>
        {Array(10)
          .fill()
          .map((item, index) => {
            return (
              <Col
                xs={12}
                key={index}
                onClick={() => handleCateogry(index, "category_name")}
              >
                <Card />
              </Col>
            );
          })}
      </Row>
    </div>
  );
};

export default Home;
