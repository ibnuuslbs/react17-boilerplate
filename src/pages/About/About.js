import React from "react";
import {PageHeader} from "antd";
import logo from "../../img/logocoda.png";

export const About = () => {
    return <div>
        <PageHeader
            style={{
                padding: 0,
                margin: 0,
                height: 40,
                backgroundColor: "transparent",
            }}
            title={"About"}
        >
        </PageHeader>
        
        <div id="aboutcard"className="mb-3" style={{minWidth: '120%', boxShadow: '0px 5px 20px  rgba(0,0,0,0.2)', backgroundColor: '#e3e8ee'}}>
  <div className="row g-0"> 
    <div className="col-md-4">
      <img src={logo} alt="..." width="300"/>
    </div>
    <div className="col-md-8">
      <div className="card-body" style={{ paddingTop: '10%', paddingRight: '10%'}}>
        <h5 className="card-title">Coda.com</h5>
        <p className="card-text">Coda.com is a safe and reliable place to buy and sell musical instruments because we only provide the best shops for you. Enjoy shopping without having to be afraid of the authenticity and quality of the goods on our platform.</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
    </div>
};
