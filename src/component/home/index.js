import React, { useState, useEffect } from "react";
import Card from "../card/card";
import { Col, Row } from "antd";
import Banner from "../banner/banner";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../constant";

const Home = () => {
  const navigate = useNavigate();
  const handleCateogry = (id, categoryName) => {
    navigate("/home/category/" + id + "/" + categoryName);
  };

  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    getCategory();
  }, []);

  const getCategory = async () => {
    let response = await axios.get(BASE_URL + "category/get");
    setCategoryData(response.data.data);
  };

  return (
    <div>
      <div className="cs-m-10">
        <Banner />
      </div>
      {/* Category */}
      <div className="cs-notation cs-bm-5">Category</div>
      <Row gutter={[12, 12]}>
        {categoryData.map((item, index) => {
          return (
            <Col
              key={item.id}
              xs={12}
              onClick={() => handleCateogry(item.id, item.slug)}
            >
              <Card
                name={item.name}
                image={item.image}
                shortDecription={item.short_description}
              />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Home;
