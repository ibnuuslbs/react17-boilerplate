import React from "react";
import { PageHeader } from "antd";
import slide1 from "../../img/drums-set-people-man.jpg"
import slide2 from "../../img/photo-1535587566541-97121a128dc5.jpg"
import slide3 from "../../img/piano-wallpaper-hd-11.jpg"
import "./Home.css"

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
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="1" aria-label="Slide-1"></button>
                <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>

              <div className="carousel-inner" >
                <div className="carousel-item active">
                  <img src={slide1}  class="d-block w-100" alt="..."></img>
                  <div className="carousel-caption d-md-block bg-danger">
                    <h5>“Music is the moonlight in the gloomy night of life.”</h5>
                    <p>-John Paul Friedrich Richter-</p>
                  </div>
                </div>
              <div className="carousel-item">
                <img src={slide2}  class="d-block w-100" alt="..."></img>
                <div className="carousel-caption d-md-block bg-danger">
                    <h5>“Music is the literature of the heart; it commences where speech ends.”</h5>
                    <p>-Alphonse de Lamartine-</p>
                  </div>
              </div>
              <div className="carousel-item">
                <img src={slide3}  class="d-block w-100" alt="..."></img>
                <div className="carousel-caption d-md-block bg-danger">
                    <h5>“Music expresses feeling and thought, without language; it was below and before speech, and it is above and beyond all words.”</h5>
                    <p>-Robert G. Ingersoll-</p>
                  </div>
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
