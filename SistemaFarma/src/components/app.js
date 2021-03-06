import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Layout from './Layout'
import Home from '../pages/Home';
import ProfileNew from '../pages/Proveedores';
import Products from '../pages/Productos';
import login from '../pages/Login';
import Ventas from '../pages/Ventas'
import Personas from '../pages/Personas';
import Profiles from '../pages/listarProveedores'



function AppSisfarma(){
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={login} />
                    <Route exact path="/Menu/proveedores/listarProveedores" component={Profiles} />
                    <Route exact path="/Menu/ventas" component={Ventas} />
                    <Route exact path="/Menu/proveedores" component={ProfileNew} />
                    <Route exact path="/Menu/productos" component={Products} />
                    <Route exact path="/Menu/personas" component={Personas} />
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default AppSisfarma;