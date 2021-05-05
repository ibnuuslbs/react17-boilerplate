import React, { useState } from "react";
import { Table, Row, Col, Card, PageHeader, Button, Divider } from "antd";
import drum1 from "../../img/products/drum1.png";
import drum2 from "../../img/products/drum2.png";

const data = [
  {
    key: 1,
    image: drum1,
    title: "TAMA STAR Bubinga Drum Set",
    price: "Rp 20.000.000,-",
    qty: 1,
  },
  {
    key: 1,
    image: drum1,
    title: "TAMA STAR Bubinga Drum Set",
    price: "Rp 20.000.000,-",
    qty: 1,
  }
];
const columns = [
  {
    title: "Image",
    render: (data) => <img src={data.image} style={{ width: "15rem" }}></img>,
  },
  {
    title: "Name",
    render: (data) => <a>{data.title}</a>,
},
{
    title: "Quantity",
    render: (data) => <a>{data.qty}</a>,
},
{
    title: "Subtotal",
    render: (data) => <a>{data.price}</a>,
  },
];

export class Cart extends React.Component {
  state = {
    selectedRowKeys: [], // Check here to configure the default column
    loading: false,
  };

  onSelectChange = (selectedRowKeys) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    this.setState({ selectedRowKeys });
  };

  render() {
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    return (
      <div>
        <Row>
          <Col flex={4}>
            <Card style={{border: "none", boxShadow: "0px 10px 30px rgb(0 0 0 / 5%)"}}>
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
              <div
                style={{
                    marginBottom: 16,
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                }}
              >
                {hasSelected ? (
                    <Button style={{ marginRight: 20 }}>Clear</Button>
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
              />
            </Card>
          </Col>
          <Col flex={2}>
            <Card style={{ marginLeft: 10, minWidth: "120%", border: "none", boxShadow: "0px 10px 30px rgb(0 0 0 / 5%)"}}>
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
                    <Col><span>Items {hasSelected ? `(${selectedRowKeys.length})` : ""}
                        </span></Col>
                    <Col style={{marginLeft: "30%"}}><span>{hasSelected ? `Rp 20.000.000,-` : ""}
                        </span></Col>
                </Row>
                <Divider />
                <Row>
                    <Col><h5>Subtotal</h5></Col>
                    <Col style={{marginLeft: "25%"}}><span>{hasSelected ? `Rp 20.000.000,-` : ""}
                        </span></Col>
                </Row>
                <Button block type="primary">Checkout</Button>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
