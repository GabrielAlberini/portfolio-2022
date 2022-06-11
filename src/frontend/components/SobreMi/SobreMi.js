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
            Mis amigos me dicen Gabo, soy Desarrollador Web especializado en React JS y SEO on page. Además del mundo de la programación y la tecnología disfruto de hablar con las personas y tratar de materializar ideas.
          </p>
        </div>
      </div>
    </section>
  );
};

export { SobreMi };
