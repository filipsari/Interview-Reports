import React  from "react";
import {Container, Row, Col} from "react-bootstrap";



import "./BasicInfo.css";


export const BasicInfo = () => {

  

  return ( 
  <Container>
  <Row className="mt-4">
    <Col sm={12} md={12} lg={4}>
      <img
        src="https://goodshepherdirvine.com/wp-content/uploads/2017/08/user-placeholder.jpg"
        alt=""
      />
    </Col>
    <Col sm={12} md={6} lg={8} className="centered ">
      <Row>
        <Col sm={12} md={12} lg={6} className="g-4">
          <h6>Name:</h6>
          <p className="fs-4"> NAME </p>
        </Col>
        <Col sm={12} md={12} lg={6} className="g-4">
          <h6>Date of Birth:</h6>
          <p className="fs-4">SOME DATE</p>
        </Col>
        <Col sm={12} md={12} lg={6} className="g-4">
          <h6>Email:</h6>
          <p className="fs-4">EMAIL</p>
        </Col>
        <Col sm={12} md={12} lg={6} className="g-4">
          <h6>Education:</h6>
          <p className="fs-4">EDUCATION</p>
        </Col>
      </Row>
    </Col>
  </Row>
</Container>
)

}

