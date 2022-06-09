import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import { Home } from './frontend/views/Home/Home';
// import { NotFound } from './views/NotFound/NotFound'
import { DashboardLogin } from './frontend/login/views/DashboardLogin';
import { VistaCertificado } from "./frontend/components/VistaCertificado/VistaCertificado";
import { CERTIFICADOS } from "../src/backend/services/services";


const Router = () => {
  const [certificado, setCertificado] = useState({})

    const { nombre } = useParams();
    console.log(nombre)


    const filtrarCertificado = () => {
        const filter = CERTIFICADOS.filter((certificado) => certificado.nombre === {nombre})
        setCertificado(filter)
    }
  
    useEffect(() => {
      filtrarCertificado();
    }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/admin" element={<DashboardLogin />}></Route>
          <Route path="/certificado-/:nombre" element={<VistaCertificado />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export { Router };
