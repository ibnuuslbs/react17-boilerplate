import React from "react";
import { Card } from "antd";
export const Address = (props) => {

  console.log(props);
  return (
    <div>
      {props.dataAddress.map((addreses) => {
        if(props.selected === addreses.id) {
          return (
            <Card bordered={false} key={addreses.id}>
              <h5>{addreses.name}</h5>
              <p>{addreses.phone}</p>
              <p
                style={{ marginTop: "-15px" }}
              >{`${addreses.detail}, ${addreses.city}, ${addreses.province}`}</p>
              <p style={{ marginTop: "-15px" }}>{addreses.postcode}</p>
            </Card>
        )}
      })}
    </div>
  );
};


export const AddressModal = ({onClick, dataAddress, selected}) => {
  return (
    <div>
      {dataAddress.map((addreses) => {
        return (
          <Card bordered={selected === addreses.id ? true : false} key={addreses.id} onClick={e => {
            e.preventDefault()
            onClick(addreses.id)
          }}>
            <h5>{addreses.name}</h5>
            <p>{addreses.phone}</p>
            <p
              style={{ marginTop: "-15px" }}
            >{`${addreses.detail}, ${addreses.city}, ${addreses.province}`}</p>
            <p style={{ marginTop: "-15px" }}>{addreses.postcode}</p>
          </Card>
        );
      })}
    </div>
  );
}