import "./Certificados.css";
import { useState, useEffect, useParams, createFactory } from "react";
import { CERTIFICADOS } from "../../../backend/services/services";
import { Link } from "react-router-dom";
import { VistaCertificado } from "../VistaCertificado/VistaCertificado";

const Certificados = () => {
  const [certificadoModal, setCertificadoModal] = useState({});
  const [showModal, setShowModal] = useState(false);

  console.log("aca", certificadoModal)


  return (
    <>
      <VistaCertificado
        showModal={showModal}
        setShowModal={setShowModal}
        certificadoModal={certificadoModal}
      />
      <section className="section-certificados">
        <h2>Certificaciones</h2>
        <h4>Haz click para mas información</h4>
        <article className="cont-main-certificados">
          {CERTIFICADOS.map((certificado) => {
            return (
              <Link
                to="/"
                onClick={() => {
                  setShowModal(true);
                  setCertificadoModal({ ...certificado });
                }}
                key={certificado.nombre}
              >
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
