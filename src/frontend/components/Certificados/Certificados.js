import "./Certificados.css";
import { useState, useEffect, useParams } from "react";
import { CERTIFICADOS } from "../../../backend/services/services";
import { Link } from "react-router-dom";
import { VistaCertificado } from "../VistaCertificado/VistaCertificado";

const Certificados = () => {
    const [certificado, setCertificado] = useState({})
    const [isModalAñadir, setIsModalAñadir] = useState(false);

    // const { nombre } = useParams();


    // const filtrarCertificado = () => {
    //     const filter = CERTIFICADOS.filter((certificado) => certificado.nombre === {nombre})
    //     setCertificado(filter)
    // }
  
    // useEffect(() => {
    //   filtrarCertificado();
    // }, []);

  return (
    <>
    <VistaCertificado
    isModalAñadir={isModalAñadir}
    setIsModalAñadir={setIsModalAñadir}
    url={certificado.url}
  />
    <section className="section-certificados">
      <h2>Certificacones</h2>
      <article className="cont-main-certificados">
        {CERTIFICADOS.map((certificado) => {
          return (
            <Link to={`/${certificado.nombre}`} onClick={() => {
                setIsModalAñadir(true);
              }} key={certificado.nombre}>
            <div>
              <img
                src={certificado.url}
                alt={`Certificación de ${certificado.nombre}`}
              />
            </div>
            </Link>
          );
        })}
      </article>
    </section>
    </>
  );
};

export { Certificados };
