import "./Header.css";

const Header = () => {
  return (
    <header className="section-header section">
      <div>
        <h1>
          Gabriel <br /> Alberini
        </h1>
        <h3>Desarrollador Web Freelancer</h3>
      </div>
      <div className="cont-img-header">
        <img
          className="img-header"
          src="./assets/pieza.png"
          alt="imagen de fondo"
        />
        <img
          className="decodado-1"
          src="./assets/decorado-1.png"
          alt="imagen de fondo"
        />
      </div>
      <a
        href="https://wa.me/+543498528087?text=¡Hola! Tengo un proyecto en mente."
        target="_blank"
        rel="noreferrer"
        className="btn-main"
      >
        Enviar un mensaje
      </a>
    </header>
  );
};

export { Header };
