import { useEffect } from "react";
import 'animate.css';
import layerBaseImage from '../assets/img/layer-base2.png'
import layerMiddleImage from '../assets/img/layer-middle1.png'
import layerFrontImage from '../assets/img/layer-front.png'

export function WelcomePage() {

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let scrollY = window.screenY;
      document.documentElement.style.setProperty("--scrollTop", `${scrollY}px`);
    });
  }, []);

  return (
    <section>
      <div className="layers">
        <div className="layer-header">
          <div className="title">Welcome</div>
        </div>
        <div className="img-layer layer-base" style={{ backgroundImage: `url(${layerBaseImage})` }}></div>
        <div className="img-layer layer-mid" style={{ backgroundImage: `url(${layerMiddleImage})` }}></div>
        <div className="img-layer layer-front" style={{ backgroundImage: `url(${layerFrontImage})` }}></div>
      </div>
    </section>
  );
}
