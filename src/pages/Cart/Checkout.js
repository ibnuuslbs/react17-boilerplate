import React, { useState } from "react";
import {
  Table,
  Row,
  Col,
  Card,
  PageHeader,
  Button,
  Divider,
  Tabs
} from "antd";

import { Item } from "./Item";

export const Checkout = () => {
    const { TabPane } = Tabs;
    return(
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
      Content of Tab Pane 2
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
                  <h6>
                    Subtotal
                  </h6>
                </Col>
              </Row>
              <Row style={{marginTop: "15px"}}>
                <Col>
                  <h6>
                    Shipping
                  </h6>
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
    )
}