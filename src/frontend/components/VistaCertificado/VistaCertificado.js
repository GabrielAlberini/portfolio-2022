
import "./VistaCertificado.css";
import { Modal, Stack } from "react-bootstrap";

const VistaCertificado = ({
  isModalAñadir,
  setIsModalAñadir,
  url
}) => {


  return (
    <Modal centered show={isModalAñadir} onHide={() => setIsModalAñadir(false)}>
      <Modal.Header>
        <Modal.Title>Imágen de actividad</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Stack>
          <div className="cont-img-actividad-detail">
            <img src={url} alt="foto de imagen de actividad" />
          </div>
        </Stack>
      </Modal.Body>
      <Modal.Footer>
        <button className="btn-main" onClick={() => setIsModalAñadir(false)}>
          Cerrar
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export { VistaCertificado };
