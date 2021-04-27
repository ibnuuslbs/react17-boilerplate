import React from "react";
import { PageHeader } from "antd";
import "./Home.css"
import { Slider } from "./Slider";

export const Home = () => {
  return (
    <div>
      <PageHeader
        style={{
          padding: 0,
          margin: 0,
          height: 40,
          backgroundColor: "transparent",
        }}
        title={""}
      ></PageHeader>
      < div className="container">
        <Slider />
      </div>
    </div>
   
  );
};
