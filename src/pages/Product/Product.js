import React, { useState } from "react";
import { PageHeader, Card, Button, Modal, InputNumber } from "antd";
import { createFromIconfontCN } from "@ant-design/icons";
import drum1 from "../../img/products/drum1.png";
import drum2 from "../../img/products/drum2.png";
import drum3 from "../../img/products/drum3.png";
import gitar2 from "../../img/products/gitar2.webp";

export const Product = (props) => {
  const { Meta } = Card;
  const IconFont = createFromIconfontCN({
    scriptUrl: [
      "//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js", // icon-javascript, icon-java, icon-shoppingcart (overrided)
      "//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js", // icon-shoppingcart, icon-python
    ],
  });
  const { numberOfItems = 99 } = props;
  const products = [
    {
      key: 1,
      image: drum1,
      title: "TAMA STAR Bubinga Drum Set",
      description: "Rp 20.000.000,-",
    },
    {
      key: 2,
      image: drum2,
      title: "TAMA STAR Maple Drum Set",
      description: "Rp 20.000.000,-",
    },
    {
      key: 3,
      image: drum3,
      title: "TAMA STAR Walnut Drum Set",
      description: "Rp 20.000.000,-",
    },
    {
      key: 4,
      image: drum2,
      title: "TAMA STAR Maple Drum Set",
      description: "Rp 20.000.000,-",
    },
    {
      key: 5,
      image: gitar2,
      title: "Yamaha f335",
      description: "Rp 2.000.000,-",
    },
    {
      key: 6,
      image: gitar2,
      title: "Yamaha f335",
      description: "Rp 2.000.000,-",
    },
  ];

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  function onChange(value) {
    console.log("changed", value);
  }

  return (
    <div
      className="container"
      style={{
        // marginTop: "10%",
        paddingBottom: "10%",
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
        title={"Products"}
      ></PageHeader>
      <div
        className="container"
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {products.slice(0, numberOfItems).map((product) => {
          return (
            <Card
              hoverable
              style={{
                width: "17rem",
                margin: "7px",
                paddingTop: "25px",
                padding: "15px",
                border: "none",
              }}
              cover={
                <img alt="example" src={product.image} key={product.key} />
              }
            >
              <Meta
                title={product.title}
                description={product.description}
                style={{ marginBottom: "15px" }}
              />
              <Button type="primary" onClick={showModal}>
                <IconFont
                  type="icon-shoppingcart"
                  style={{ paddingBottom: "10px" }}
                />
              </Button>
              <Button style={{ marginLeft: 7 }} key="link" href="/app/detail">
                Detail
              </Button>
              <Modal
                visible={isModalVisible}
                onCancel={handleCancel}
                width={300}
                footer={[
                  <Button key="back" onClick={handleCancel}>
                    Cancel
                  </Button>,
                  <Button
                    key="link"
                    href="/app/cart"
                    type="primary"
                    onClick={handleOk}
                  >
                    Add to cart
                  </Button>,
                ]}
              >
                <h4>Set Amount</h4>
                <InputNumber
                  size="large"
                  min={1}
                  defaultValue={1}
                  onChange={onChange}
                />
              </Modal>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
