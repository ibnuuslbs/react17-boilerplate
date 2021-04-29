// import { Button, PageHeader } from "antd";
// import { About } from "../About/About";
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { Slider } from "./Slider";
import { Product } from "../Product/Product";

export const Home = () => {
  return (
    <div>
      <div>
        <Slider />
        <Link to={'/app/product'} className="btn btn-outline-danger" style={{float: "right", zIndex: 1}}>
					<span>See All</span>
				</Link>
        <Product />
      </div>
    </div>
  );
};

