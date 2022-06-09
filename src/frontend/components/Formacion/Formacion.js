import "./Formacion.css";

const Formacion = () => {
  return (
    <section className="section-formacion">
      <div className="cont-main-bio-formacion">
        <div className="cont-bio-formacion">
          <h2 className="titulo-formacion">Educación</h2>
          <h3>Carrera de Desarrollo Web Frontend</h3>
          <h4>Coderhouse</h4>
          <ul>
              <li>3/2020 | 2022</li>
          </ul>
        </div>
        <div className="cont-bio-formacion">
          <h3>Carrera de Desarrollo Web Backend</h3>
          <h4>Coderhouse</h4>
          <ul>
              <li>5/2022 | en curso</li>
          </ul>
        </div>
        <img
          className="formacion-decodado-1"
          src="./assets/decorado-1.png"
          alt="imagen de fondo"
        />
      </div>
      <div className="cont-main-skills-formacion">
        <div className="cont-skills-formacion">
          <h2 className="titulo-formacion">Skills</h2>
          <h3>Hard skills</h3>
          <ul>
              <li>Javascript | React JS</li>
              <li>Firebase</li>
              <li>SQL</li>
              <li>JQuery</li>
              <li>Wordpress</li>
              <li>CSS 3 | SCSS</li>
              <li>HTML 5 | Semántico | Accesibilidad</li>
              <li>Git</li>
              <li>Figma</li>
          </ul>
        </div>
        <div className="cont-bio-formacion">
          <h3>Soft skills</h3>
          <ul>
              <li>Gestor de tiempos</li>
              <li>Proactivo</li>
              <li>Lider</li>
              <li>Resolutivo</li>
          </ul>
        </div>
        <img
          className="formacion-decodado-2"
          src="./assets/decorado-2.png"
          alt="imagen de fondo"
        />
      </div>
    </section>
  );
};

export { Formacion };