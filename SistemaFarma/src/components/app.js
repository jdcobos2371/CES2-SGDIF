import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Layout from './Layout'
import Home from '../pages/Home';
import ProfileNew from '../pages/Proveedores';
import login from '../pages/Login';
import Personas from '../pages/Personas';



function AppSisfarma(){
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={login} />
                    <Route exact path="/Menu/proveedores" component={ProfileNew} />
                    <Route exact path="/Menu/personas" component={Personas} />
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default AppSisfarma;