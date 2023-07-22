import { useState, useEffect } from "react";
import story1 from "../assets/img/zheztyrnak.png";
import story2 from "../assets/img/mystan-kempir.png";
import story3 from "../assets/img/zhalmauyz-kempir.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const Tails = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const [activeLink, setActiveLink] = useState('home');

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <section className="tail" id="tails">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="tail-bx wow zoomIn">
                        <h2>Tails</h2>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme tail-slider">
                            <div className="item">
                                <img src={story1} alt="Image" href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}/>
                            </div>
                            <div className="item">
                                <img src={story2} alt="Image" />
                            </div>
                            <div className="item">
                                <img src={story3} alt="Image" />
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
