import "./Proyectos.css";
import { SliderProyectos } from '../SliderProyectos/SliderProyectos';

const Proyectos = () => {
  return (
    <section className="section-proyectos">
      <h2>Proyectos recientes</h2>
      <h4>Haz click para más información</h4>
      <div>
        <SliderProyectos />
      </div>
    </section>
  );
};

export { Proyectos };