import "./SobreMi.css";

const SobreMi = () => {
  return (
    <section className="section-sobre-mi">
      <div className="cont-main-img-sobre-mi">
        <div className="cont-img-sobre-mi">
          <img className="img-sobre-mi" src="./assets/sobre-mi.png" alt="" />
        </div>
      </div>
      <div className="cont-main-txt-sobre-mi">
        <div className="cont-txt-sobre-mi">
          <div className="cont-titulo-sobre-mi">
            <h2>¿Quién es Gabriel?</h2>
            <div className="cont-decorado-2">
              <img src="./assets/decorado-2.png" alt="" />
            </div>
          </div>
          <p>
            Soy Desarrollador Web Freelancer especializado en React Js y SEO on
            page. Trabajo de ésta manera desde hace un año realizando proyectos
            particulares e institucionales. Continuamente en aprendizaje.
          </p>
        </div>
      </div>
    </section>
  );
};

export { SobreMi };
