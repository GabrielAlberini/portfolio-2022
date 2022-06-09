import { Certificados } from "../../components/Certificados/Certificados";
import { Formacion } from "../../components/Formacion/Formacion";
import { Header } from "../../components/Header/Header";
import { Proyectos } from "../../components/Proyectos/Proyectos";
import { SobreMi } from "../../components/SobreMi/SobreMi"

const Home = () => {
  return (
    <>
      <Header />
      <SobreMi />
      <Formacion />
      <Proyectos />
      <Certificados />
    </>
  );
};

export { Home };
