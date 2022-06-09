import "./VistaProyecto.css";
import { Modal, Stack } from "react-bootstrap";
import { Helmet } from "react-helmet";

const VistaProyecto = ({ showModal, setShowModal, proyectoModal }) => {
  return (
    <>
      <Modal
        size="lg"
        centered
        show={showModal}
        onHide={() => setShowModal(false)}
      >
        <Helmet>
          <title>{proyectoModal.nombre} | Gabriel Alberini Portfolio</title>
        </Helmet>
        <Modal.Header>
          <Modal.Title>
            <h2>{proyectoModal.nombre}</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Stack>
            <div className="cont-img-proyecto-detail">
              <img
                src={proyectoModal.URLdetail}
                alt="foto de imagen de actividad"
              />
            </div>
            <div className="cont-info-proyecto">
              <p>{proyectoModal.descripcion}</p>
              <p className="herramientas-proyecto">
                Herramientas: {proyectoModal.herramientas}
              </p>
            </div>
            <div className="cont-botones-proyecto">
              <a
                href={proyectoModal.webLink}
                rel="noreferrer"
                target="_blank"
                className="btn-detail"
              >
                Sitio Web
              </a>
              {proyectoModal.repoLink !== "" && (
                <a
                  href={proyectoModal.repoLink}
                  rel="noreferrer"
                  target="_blank"
                  className="btn-detail"
                >
                  Ver repositorio
                </a>
              )}
            </div>
          </Stack>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn-detail" onClick={() => setShowModal(false)}>
            Cerrar
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export { VistaProyecto };
