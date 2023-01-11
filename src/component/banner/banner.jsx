import { Col, Row } from 'antd'
import React from 'react'

const Banner = () => {
  return (
    <div>
      <Row>
        <Col span={24}>
          <img className='cs-w-max'
            src='https://img.freepik.com/free-psd/healthy-dog-food-banner-template_23-2148457498.jpg?w=2000&t=st=1671896166~exp=1671896766~hmac=7f3b012d63c90693991c44c76bb06b89228c04c0a9ec8d09fc0761e82767af7b' />
        </Col>
      </Row>
    </div>
  )
}

export default Banner