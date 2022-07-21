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
            <h2>¿Quién soy?</h2>
            <div className="cont-decorado-2">
              <img src="./assets/decorado-2.png" alt="" />
            </div>
          </div>
          <p>
            Mis amigos me dicen Gabo, soy Desarrollador Web especializado en
            React y SEO on page. Además del mundo IT, me encanta el mundo del
            diseño, hablar con las personas y materializar deseos.
          </p>
          <p>
            Actualmente trabajo como desarrollador web freelancer ofreciendo
            servicio a distintas instituciones y proyectos particulares.
          </p>
          <p>
            También disfruto mucho de compartir lo que se, lo cúal me llevo a
            ser profesor de Desarrollo Web Frontend en ADA ITW.
          </p>
        </div>
      </div>
    </section>
  );
};

export { SobreMi };
