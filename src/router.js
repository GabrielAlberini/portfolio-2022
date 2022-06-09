import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from './frontend/views/Home/Home';
// import { NotFound } from './views/NotFound/NotFound'


const Router = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export { Router };
