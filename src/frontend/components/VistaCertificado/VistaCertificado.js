
import "./VistaCertificado.css";
import { Modal, Stack } from "react-bootstrap";
import {Helmet} from "react-helmet";

const VistaCertificado = ({
  showModal,
  setShowModal,
  certificadoModal
}) => {

  return (
    <Modal size="lg" centered show={showModal} onHide={() => setShowModal(false)}>
      <Helmet>
        <title>{certificadoModal.nombre} | Gabriel Alberini Portfolio</title>
      </Helmet>
      <Modal.Header>
        <Modal.Title>{certificadoModal.nombre}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Stack>
          <div className="cont-img-actividad-detail">
            <img src={certificadoModal.url} alt="foto de imagen de actividad" />
          </div>
        </Stack>
      </Modal.Body>
      <Modal.Footer>
        <button className="btn-detail" onClick={() => setShowModal(false)}>
          Cerrar
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export { VistaCertificado };
