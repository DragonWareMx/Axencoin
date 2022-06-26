import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";
import { Calculadora } from '../views/Calculadora';
import { Compra } from '../views/Compra';
import { Cuenta } from '../views/Cuenta';
import { Home } from '../views/Home';
import Layout from '../views/layouts/Layout';
import { Panel } from '../views/Panel';
import {Receive} from '../views/Receive';
import {Swap} from '../views/Swap';
import {Send} from '../views/Send';
import {Withdraw} from '../views/Withdraw';

function RouteWrapper({
    component: Component, 
    layout: Layout, 
    ...rest
  }) {
    return (
      <Route {...rest} render={(props) =>
        <Layout {...props}>
          <Component {...props} />
        </Layout>
      } />
    );
  }

export default function Router() {
    return (
        <BrowserRouter forceRefresh>
            <Switch>
                <Route exact path="/" component={Home}/>
                <RouteWrapper exact path="/panel" component={Panel} layout={Layout}/>
                <RouteWrapper exact path="/cuenta" component={Cuenta} layout={Layout}/>
                <RouteWrapper exact path="/calculadora" component={Calculadora} layout={Layout}/>

                {/* PONER EN EL MENU DROPDOWN */}
                <RouteWrapper exact path="/compra" component={Compra} layout={Layout}/>
                <RouteWrapper exact path="/recibe" component={Receive} layout={Layout}/>
                <RouteWrapper exact path="/swap" component={Swap} layout={Layout}/>
                <RouteWrapper exact path="/envia" component={Send} layout={Layout}/>
                <RouteWrapper exact path="/retira" component={Withdraw} layout={Layout}/>
                {/* PONER EN EL MENU DROPDOWN */}

                {/* <Route exact path="/documentos" element={<Documentos />} /> */}
                
            </Switch>
        </BrowserRouter>
    )
}
