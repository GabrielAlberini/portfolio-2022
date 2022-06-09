import "./Footer.css";

const Footer = () => {
  return (
    <section className="section-footer">
      <div>
        <img src="./assets/decorado-3.png" alt="imagen de decorado" />
      </div>
      <h4>
        Construyamos un <br /> deseo juntos
      </h4>
      <div className="cont-data-footer">
        <div>
          <p>3498 - 15528087</p>
          <p>Santa Fe - Argentina</p>
        </div>
        <div>
          <p>gabialberini733@gmail.com</p>
          <div className="cont-svg-footer">
          <a
              href="https://www.linkedin.com/in/gabriel-alberini/"
              rel="noreferrer"
              target="_blank"
            >
              <img src="./assets/linkedin-brands.svg" alt="" />
            </a>
            <a
              href="https://github.com/GabrielAlberini"
              rel="noreferrer"
              target="_blank"
            >
              <img src="./assets/github-brands.svg" alt="" />
            </a>
            <a
              href="https://www.instagram.com/gabrielcalberini/"
              rel="noreferrer"
              target="_blank"
            >
              <img src="./assets/instagram-square-brands.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Footer };
