import "./SliderProyectos.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";

import { PROYECTOS } from "../../../backend/services/services";

const SliderProyectos = () => {
  const options = {
    responsiveClass: true,
    nav: false,
    dots: false,
    autoplay: true,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 2,
      },
      700: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <OwlCarousel {...options}>
      {PROYECTOS.map((proyecto) => {
        return (
          <div key={proyecto.nombre} className="item">
            <img src={proyecto.URLimagen} alt={`Imagen del proyecto ${proyecto.nombre}`} />
          </div>
        );
      })}
    </OwlCarousel>
  );
};

export { SliderProyectos };
