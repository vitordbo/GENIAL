import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Login from "../pages/Login";
import Cadastrar from "../pages/Cadastrar";

function Rotas() {
    return(
        <BrowserRouter>
        <Routes>
            <Route element={<Login />} path='/' exact />
            <Route element={<Cadastrar />} path='/Cadastrar'/>
        </Routes>
        </BrowserRouter>
    )

}

export default Rotas;