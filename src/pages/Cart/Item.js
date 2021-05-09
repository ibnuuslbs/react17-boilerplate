import React, { useState } from "react";
import { Card, Row, Col, InputNumber, Button, Divider } from "antd";
import { DeleteFilled } from '@ant-design/icons'
import drum1 from "../../img/products/drum1.png";
import gitar2 from "../../img/products/gitar2.webp";

export const Item = (props) => {
    const { numberOfItems = 99 } = props;
const items = [
    {
        id: 1,
        merchant: "Toko Sukamaju",
        image: drum1,
        name: "TAMA STAR Bubinga Drum Set",
        price: "Rp 20.000.000,-",
        qty: 1,
      },
      {
        id: 2,
        merchant: "Toko Sukamundur",
        image: gitar2,
        name: "Yamaha f335",
        price: "Rp 2.000.000,-",
        qty: 1,
      },
];

function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}

function changeQty(value) {
  console.log('changed', value);
}

return(
    <div>
        {items.slice(0, numberOfItems).map((item) => {
            return (
    <div className="site-card-border-less-wrapper" key={item.id}>
    <Card bordered={false} >
      <h5 style={{marginBottom: "30px"}}>{item.merchant}</h5>
      <Row>
      <Col flex="150px">      
      <img src={item.image} style={{width: "120px"}} />
</Col>
      <Col flex="400px" style={{marginLeft: "20px"}} >
      <h6>{item.name}</h6>
      <p>{item.price}</p>
      </Col>
      <Col flex="100px">
      <InputNumber style={{float: "right"}} min={1} max={10} defaultValue={1} onChange={changeQty} />
      </Col>
      <Col flex="100px">
        <Button type="primary" style={{float: "right"}} icon={<DeleteFilled />}></Button>
      </Col>
    </Row>
    </Card>
    <Divider />
    {/* <hr style={{color: "rgba(0,0,0,.20)",height: "5px"}}/> */}
  </div>
            )
        })}
  </div>
)
}