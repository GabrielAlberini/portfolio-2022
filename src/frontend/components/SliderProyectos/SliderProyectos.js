import "./SliderProyectos.css";
import { useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import { VistaProyecto } from "../VistaProyecto/VistaProyecto";

import { PROYECTOS } from "../../../backend/services/services";
import { Link } from "react-router-dom";

const SliderProyectos = () => {
  const [proyectoModal, setProyectoModal] = useState({});
  const [showModal, setShowModal] = useState(false);

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
    <>
      <VistaProyecto
        showModal={showModal}
        setShowModal={setShowModal}
        proyectoModal={proyectoModal}
      />
      <OwlCarousel {...options}>
        {PROYECTOS.map((proyecto) => {
          return (
            <Link
              to="/"
              onClick={() => {
                setShowModal(true);
                setProyectoModal({ ...proyecto });
              }}
            >
              <div key={proyecto.nombre} className="item">
                <img
                  src={proyecto.URLimagen}
                  alt={`Imagen del proyecto ${proyecto.nombre}`}
                />
              </div>
            </Link>
          );
        })}
      </OwlCarousel>
    </>
  );
};

export { SliderProyectos };
