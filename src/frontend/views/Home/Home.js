import { Certificados } from "../../components/Certificados/Certificados";
import { Formacion } from "../../components/Formacion/Formacion";
import { Header } from "../../components/Header/Header";
import { Proyectos } from "../../components/Proyectos/Proyectos";
import { SobreMi } from "../../components/SobreMi/SobreMi";
import { Helmet } from "react-helmet";
import { Footer } from "../../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Gabriel Alberini Portfolio</title>
      </Helmet>
      <Header />
      <SobreMi />
      <Formacion />
      <Proyectos />
      <Certificados />
      <Footer />
    </>
  );
};

export { Home };
