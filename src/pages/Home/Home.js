import React from "react";
import { PageHeader } from "antd";
import slide1 from "../../img/drums-set-people-man.jpg"
import slide2 from "../../img/31e32d93be0f2ac2cf246f3502c3043a.jpg"
import slide3 from "../../img/piano-wallpaper-hd-11.jpg"

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
        <div className="row">
          <div className="col-md-12">
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner" style={{width:"100%", height:"500px"}}>
                <div className="carousel-item active">
                  <img src={slide1}  class="d-block w-100" alt="..."></img>
                </div>
              <div className="carousel-item" style={{width:"100%", height:"500px"}}>
                <img src={slide2}  class="d-block w-100" alt="..."></img>
              </div>
              <div className="carousel-item" style={{width:"100%", height:"500px"}}>
                <img src={slide3}  class="d-block w-100" alt="..."></img>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden"></span>
            </button>
           </div>
          </div>
        </div>
      </div>
    </div>
   
  );
};
