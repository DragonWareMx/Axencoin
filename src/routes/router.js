import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import { Calculadora } from '../views/Calculadora';
import { Compra } from '../views/Compra';
import { Cuenta } from '../views/Cuenta';
import { Documentos } from '../views/Documentos';
import { Home } from '../views/Home';
import Layout from '../views/layouts/Layout';
import { Panel } from '../views/Panel';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route element={<Layout />}>
                    <Route exact path="/panel" element={<Panel />} />
                    <Route exact path="/compra" element={<Compra />} />
                    <Route exact path="/cuenta" element={<Cuenta />} />
                    <Route exact path="/calculadora" element={<Calculadora />} />
                    {/* <Route exact path="/documentos" element={<Documentos />} /> */}
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
