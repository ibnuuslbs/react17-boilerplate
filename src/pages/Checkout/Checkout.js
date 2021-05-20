import React, { useState } from "react";
import { Row, Col, Card, PageHeader, Button, Divider, Tabs, Modal } from "antd";

import { Item } from "../Cart/Item";
import { Address, AddressModal } from "./Address";
import { FormAddress } from "./FormAddress";

export const Checkout = (props) => {
  const [selected, setSelected] = useState(1)
  const [selectId, setSelectId] = useState(0)
  const [setAddress, getAddress] = useState([
    {
      id: 1,
      name: "Dinda Ragil",
      phone: "012345678901",
      province: "East Java",
      city: "Malang",
      detail: "RT 07 RW 07 Sawojajar, Kedungkandang",
      postcode: "65139",
      
    },
    {
      id: 2,
      name: "Ragil",
      phone: "012345678901",
      province: "West Java",
      city: "Bekasi",
      detail: "RT 03 RW 03 Jatibening Baru, Pondok Gede",
      postcode: "17412",
    },
  ]);

  const { TabPane } = Tabs;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModal1Visible, setIsModal1Visible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    setSelected(selectId);
    setSelectId(0);
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

  const eventCreateAddress = (address) => {
    setAddress(getAddress.concat(address));
    console.log(getAddress);
  };

  const handleSelected = (id) => {
    setSelectId(id);
    console.log(id)
  }

  

  return (
    <div>
      <Row>
        <Col flex="70%">
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
                <Address dataAddress={setAddress} selected={selected} />
                <Row style={{ marginBottom: "20px", marginLeft: "20px" }}>
                  <Button type="primary" onClick={showModal}>
                    Change Address
                  </Button>
                  <Modal
                    visible={isModalVisible}
                    onCancel={handleCancel}
                    width={700}
                    footer={[
                      <Button key="back" onClick={handleCancel}>
                        Cancel
                      </Button>,
                      <Button type="primary" onClick={handleOk}>
                        Change
                      </Button>,
                    ]}
                  >
                    <AddressModal onClick={handleSelected} dataAddress={setAddress} selected={selectId}/>
                  </Modal>
                  <Button style={{ marginLeft: "10px" }} onClick={showModal1}>
                    New Address
                  </Button>
                  <Modal
                    visible={isModal1Visible}
                    onCancel={handleCancel1}
                    width={700}
                    title="New Address"
                    footer={[
                      
                    ]}
                  >
                    <FormAddress onCreateAddress={eventCreateAddress} />
                  </Modal>
                </Row>
              </TabPane>
              <TabPane tab="Payment" key="3">
                Whoops haven't done yet!
              </TabPane>
            </Tabs>
          </Card>
        </Col>
        <Col flex="30%">
          <Card
            style={{
              marginLeft: 10,
              minWidth: "100%",
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
                <h6>Address</h6>
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
