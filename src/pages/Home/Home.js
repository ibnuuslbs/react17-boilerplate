import { Button } from "antd";
// import { About } from "../About/About";
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { Slider } from "./Slider";
import { Product } from "../Product/Product";
import { About } from "../About/About";

export const Home = () => {
  return (
    <div>
      <div>
        <Slider />
        {/* <Link to={'/app/product'} className="btn btn-outline-danger" style={{float: "right", zIndex: 1}}>
					<span>See All</span>
				</Link> */}
        <About />
        <Link to="/app/product"><Button type="primary" style={{float: "right"}}>See All</Button></Link>
        <Product numberOfItems={4}/>
      </div>
    </div>
  );
};

