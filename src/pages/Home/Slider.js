import slide1 from "../../img/drums-set-people-man.jpg"
import slide2 from "../../img/photo-1535587566541-97121a128dc5.jpg"
import slide3 from "../../img/piano-wallpaper-hd-11.jpg"

export const Slider = () => {
    const sliders = [
        {
          key: 1,
          image: slide1,
          text: '“Music is the moonlight in the gloomy night of life.”',
          subtext: '-John Paul Friedrich Richter-',
          active: true
        },
        {
          key: 2,
          image: slide2,
          text: '“Music is the literature of the heart; it commences where speech ends.”',
          subtext: '-Alphonse de Lamartine-'
        },
        {
          key: 3,
          image: slide3,
          text: '“Music expresses feeling and thought, without language; it was below and before speech, and it is above and beyond all words.”',
          subtext: '-Robert G. Ingersoll-'
        },
      ];
      
    return (
        <div className="row">
          <div className="col-md-12">
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="1" aria-label="Slide-1"></button>
                <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner" >
              {
                sliders.map(slide => {
                  const isDataActive = (slide.active ? 'active' : '');
                  return (
                    <div className={"carousel-item " + isDataActive} key={slide.key}>
                      <img src={slide.image}  class="d-block w-100" alt="..."></img>
                      <div className="carousel-caption d-md-block bg-danger">
                        <h5>{slide.text}</h5>
                        <p>{slide.subtext}</p>
                      </div>
                    </div>
                  )
                })
              }
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
    )
}