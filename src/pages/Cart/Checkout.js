import React, { useState } from "react";
import { Row, Col, Card, PageHeader, Button, Divider, Tabs, Modal } from "antd";

import { Item } from "./Item";
import { Shipping } from "./Shipping";
import { FormAddress } from "./FormAddress";

export const Checkout = () => {
  const { TabPane } = Tabs;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModal1Visible, setIsModal1Visible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const showModal1 = () => {
    setIsModal1Visible(true);
  };

  const handleOk1 = () => {
    setIsModal1Visible(false);
  };

  const handleCancel1 = () => {
    setIsModal1Visible(false);
  };

  return (
    <div>
      <Row>
        <Col flex="950px">
          <Card
            style={{
              border: "none",
              boxShadow: "0px 10px 30px rgb(0 0 0 / 5%)",
            }}
          >
            <PageHeader
              style={{
                padding: 0,
                marginBottom: 10,
                height: 40,
                backgroundColor: "transparent",
                zIndex: 0,
              }}
              title={"Checkout"}
            ></PageHeader>
            <Tabs defaultActiveKey="1" centered>
              <TabPane tab="Items" key="1">
                <Item />
              </TabPane>
              <TabPane tab="Shipping" key="2">
                <Shipping numberOfAddress={1} />
                <Row style={{ marginBottom: "20px", marginLeft: "20px" }}>
                  <Button type="primary" onClick={showModal}>Change Address</Button>
                  <Modal
                visible={isModalVisible}
                onCancel={handleCancel}
                width={700}
                footer={[
                  <Button key="back" onClick={handleCancel}>
                    Cancel
                  </Button>,
                  <Button
                    type="primary"
                    onClick={handleOk}
                  >
                    Change
                  </Button>,
                ]}
              >
                <Shipping />
              </Modal>
                  <Button style={{ marginLeft: "10px" }} onClick={showModal1}>New Address</Button>
                  <Modal
                visible={isModal1Visible}
                onCancel={handleCancel1}
                width={700}
                footer={[
                  <Button key="back" onClick={handleCancel1}>
                    Cancel
                  </Button>,
                  <Button
                    type="primary"
                    onClick={handleOk1}
                  >
                    Submit
                  </Button>,
                ]}
              >
                <FormAddress />
              </Modal>
                </Row>
              </TabPane>
              <TabPane tab="Payment" key="3">
                Whoops haven't done yet!
              </TabPane>
            </Tabs>
          </Card>
        </Col>
        <Col flex={1}>
          <Card
            style={{
              marginLeft: 10,
              minWidth: "120%",
              border: "none",
              boxShadow: "0px 10px 30px rgb(0 0 0 / 5%)",
            }}
          >
            <PageHeader
              style={{
                padding: 0,
                marginBottom: 10,
                height: 40,
                backgroundColor: "transparent",
                zIndex: 0,
              }}
              title={"Checkout Summary"}
            ></PageHeader>
            <Divider />
            <Row>
              <Col>
                <h6>Subtotal</h6>
              </Col>
            </Row>
            <Row style={{ marginTop: "15px" }}>
              <Col>
                <h6>Shipping</h6>
              </Col>
            </Row>
            <Divider />
            <Row>
              <Col>
                <h5>Total</h5>
              </Col>
            </Row>
            <Button
              block
              type="primary"
              style={{ lineHeight: "50px", height: "50px", marginTop: 20 }}
            >
              Purchase
            </Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
