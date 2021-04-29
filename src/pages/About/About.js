import React from "react";
import { PageHeader } from "antd";
import logo from "../../img/a.jpg";

export const About = () => {
  return (
    <section id="about">
      <PageHeader
        style={{
          padding: 0,
          marginBottom: 10,
          height: 40,
          backgroundColor: "transparent",
          justifyContent: "center",
        }}
        title={"About"}
      ></PageHeader>

      <div
        className="mb-3"
        style={{
          boxShadow: "0px 5px 20px  rgba(0,0,0,0.2)",
          backgroundColor: "#ffffff",
          width: "100%"
        }}
      >
        <div className="row">
          <div className="col-md-4">
            <img src={logo} alt="..." height="300"/>
          </div>
          <div className="col-md-8">
            <div
              
              style={{ paddingTop: "10%", paddingRight: "10%", marginLeft: "20%"  }}
            >
              <h5 >Coda.com</h5>
              <p >
                Coda.com is a safe and reliable place to buy and sell musical
                instruments because we only provide the best shops for you.
                Enjoy shopping without having to be afraid of the authenticity
                and quality of the goods on our platform.
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
