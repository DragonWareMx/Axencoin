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
import {Receive} from '../views/Receive';
import {Swap} from '../views/Swap';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route element={<Layout />}>
                    <Route exact path="/panel" element={<Panel />} />
                    <Route exact path="/cuenta" element={<Cuenta />} />
                    <Route exact path="/calculadora" element={<Calculadora />} />

                    {/* PONER EN EL MENU DROPDOWN */}
                    <Route exact path="/compra" element={<Compra />} />
                    <Route exact path="/recibe" element={<Receive />} />
                    <Route exact path="/swap" element={<Swap />} />
                    {/* PONER EN EL MENU DROPDOWN */}

                    {/* <Route exact path="/documentos" element={<Documentos />} /> */}
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
