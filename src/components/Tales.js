import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import story1 from "../assets/img/zheztyrnak.png";
import story2 from "../assets/img/mystan-kempir.png";
import story3 from "../assets/img/zhalmauyz-kempir.png";

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const tales = [
  { img: story1, name: "Zheztyrnak" },
  { img: story2, name: "Mystan-Kempir" },
  { img: story3, name: "Zhalmauyz-Kempir" },
];

export const Tales = () => {
  return (
    <section className="tale" id="tales">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="tale-bx wow zoomIn">
              <h2>Tales</h2>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme tale-slider"
              >
                {tales.map((tale) => (
                  <div className="item" key={tale.name}>
                    <img src={tale.img} alt={tale.name} />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
