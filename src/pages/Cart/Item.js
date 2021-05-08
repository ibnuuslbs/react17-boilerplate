import React, { useState } from "react";
import { Card, Row, Col, InputNumber, Checkbox } from "antd";
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
    <hr style={{color: "rgba(0,0,0,.20)",height: "5px"}}/>
    <Card bordered={false} >
    <Row>
    <Checkbox onChange={onChange} style={{marginRight: "15px"}}/>
      <h5 style={{marginBottom: "30px"}}>{item.merchant}</h5>
    </Row>
      <Row>
    <Checkbox onChange={onChange} style={{marginRight: "15px"}}/>
      <Col flex={1}>      
      <img src={item.image} style={{width: "120px"}} />
</Col>
      <Col style={{marginLeft: "20px"}} flex={4}>
      <h6>{item.name}</h6>
      <p>{item.price}</p>
      </Col>
      <Col flex={1}>
      <InputNumber size="large" style={{float: "right"}} min={1} max={10} defaultValue={1} onChange={changeQty} />
      </Col>
    </Row>
    </Card>
    <hr style={{color: "rgba(0,0,0,.20)",height: "5px"}}/>
  </div>
            )
        })}
  </div>
)
}