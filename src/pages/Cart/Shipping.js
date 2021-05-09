import React from "react";
import { Card } from "antd";

export const Shipping = (props) => {
  const { numberOfAddress = 10 } = props;
  const addreses = [
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
  ];

  return (
    <div>
      {addreses.slice(0, numberOfAddress).map((add) => {
        return (
          <Card bordered={false} key={add.id}>
            <h5>{add.name}</h5>
            <p>{add.phone}</p>
            <p
              style={{ marginTop: "-15px" }}
            >{`${add.detail}, ${add.city}, ${add.province}`}</p>
            <p style={{ marginTop: "-15px" }}>{add.postcode}</p>
          </Card>
        );
      })}
    </div>
  );
};
