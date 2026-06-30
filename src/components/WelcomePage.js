import { useEffect } from "react";
import 'animate.css';
import layerBaseImage from '../assets/img/layer-base2.png';
import layerMiddleImage from '../assets/img/layer-middle1.png';
import layerFrontImage from '../assets/img/layer-front.png';

export function WelcomePage() {
  useEffect(() => {
    // window.scrollY is the vertical scroll offset.
    // (the old code used window.screenY, which is the window's position
    // on the physical monitor — it doesn't change on scroll, so the
    // parallax effect never moved.)
    const onScroll = () => {
      document.documentElement.style.setProperty(
        "--scrollTop",
        `${window.scrollY}px`
      );
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
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
