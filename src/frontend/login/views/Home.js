// import { useEffect, useState } from "react";
import { cerrarSesion } from '../../../backend/functions/signOut';
import { Container, Stack, Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Container>
        <Stack direction="horizontal" className="justify-content-between p-3">
          <div style={{ width: 100 }}>
            <img
              style={{ width: "100%" }}
              src="https://i.ibb.co/s2RhLSB/perfil.jpg"
              alt="imagen de perfil"
            />
          </div>
          <h1>¡Hola, Gabo!</h1>
          <div>
            <Button>Ir a inicio</Button>
            <Button className="m-3" onClick={cerrarSesion}>
              Cerrar sesion
            </Button>
          </div>
        </Stack>
      </Container>
    </>
  );
};

export { Home };
