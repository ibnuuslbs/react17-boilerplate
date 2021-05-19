import React, { useState } from "react";
import {
  Row,
  Col,
  Card,
  PageHeader,
  Button,
  Divider,
} from "antd";
import drum1 from "../../img/products/drum1.png";
import drum2 from "../../img/products/drum2.png";
import { Item } from "./Item";

export const Cart = () => {
    
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
                title={"Cart"}
              ></PageHeader>
              <Divider />
                <Item />
              {/* <div
                style={{
                  marginBottom: 16,
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                {hasSelected ? (
                  <Button type="primary" style={{ marginRight: 20 }}>
                    Clear
                  </Button>
                ) : (
                  <></>
                )}
                <span style={{ marginLeft: 5 }}>
                  {hasSelected
                    ? `Selected ${selectedRowKeys.length} items`
                    : ""}
                </span>
              </div>
              <Table
                rowSelection={rowSelection}
                columns={columns}
                dataSource={data}
              /> */}
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
                title={"Order Summary"}
              ></PageHeader>
              <Divider />
              <Row>
                <Col>
                  <h6>
                    Items 
                  </h6>
                </Col>
                <Col style={{ marginLeft: "30%" }}>
                </Col>
              </Row>
              <Divider />
              <Row>
                <Col>
                  <h5>Subtotal</h5>
                </Col>
                <Col style={{ marginLeft: "25%" }}>
                </Col>
              </Row>
              <Button
                block
                type="primary"
                key="link" href="/app/checkout"
                style={{ lineHeight: "50px", height: "50px", marginTop: 20 }}
              >
                Checkout
              </Button>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }

