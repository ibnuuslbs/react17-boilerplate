import React from "react";
import { Row, Col, Divider } from "antd";
import m4 from "../../img/m4.svg";
import m5 from "../../img/m5.svg";
import m6 from "../../img/m6.svg";

export const About = () => {
  return (
    <section id="about" style={{ paddingBottom: "10%", width: "100%"}}>
        <Row style={{ paddingBottom: "10%" }}>
          <Col span={8}>
            <img
              src={m4}
              alt="..."
              height="300"
              style={{ paddingTop: "15%" }}
            />
          </Col>
          <Col span={16}>
            <div style={{ paddingTop: "15%", paddingLeft: "10%" }}>
              <Divider orientation="left">
                <h4>Find what you want</h4>
              </Divider>
              <p>
                Enjoy shopping without having to be afraid of the authenticity
                and quality of the products on our platform.
              </p>
            </div>
          </Col>
        </Row>
        <Row style={{ paddingBottom: "10%" }}>
          <Col span={16}>
            <div style={{ paddingTop: "15%", paddingRight: "10%" }}>
              <Divider orientation="right">
                <h4>Safety Delivery</h4>
              </Divider>
              <p style={{textAlign: "right"}}>
              No need to worry about the safety of the products, because we have chosen a safe shipping service.
              </p>
            </div>
          </Col>
          <Col span={8}>
            <img
              src={m5}
              alt="..."
              height="300"
              style={{ paddingTop: "15%" }}
            />
          </Col>
        </Row>
        <Row style={{ paddingBottom: "10%" }}>
          <Col span={8}>
            <img
              src={m6}
              alt="..."
              height="300"
              style={{ paddingTop: "15%"}}
            />
          </Col>
          <Col span={16}>
            <div style={{ paddingTop: "15%", paddingLeft: "10%" }}>
              <Divider orientation="left">
                <h4>Enjoy!</h4>
              </Divider>
              <p>
              Get the best quality products and various advantages by becoming our customers.
              </p>
            </div>
          </Col>
        </Row>
      
    </section>
  );
};
