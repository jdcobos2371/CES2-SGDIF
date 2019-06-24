import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import '../styles/global.css';
import 'bootstrap/dist/css/bootstrap.css';
import Proveedor from '../images/Proveedor.png';
import Producto from '../images/Productos.jpg';
import venta from '../images/Venta.png';
import persona from '../images/persona.png';
import salir from '../images/salir.png';

class Navbar extends Component {
    render(){
        return(


        
            <nav className="sidebar">
                <ul className="contentbar">
                    <li className="option">
                    <i ><img className="imgLloginNavbar" src={Proveedor} alt="logo" />  Proveedor </i>
                        
                    </li>
                    <li className="option">
                    <i ><img className="imgLloginNavbar" src={Producto} alt="logo" />  Producto </i>
                        
                    </li>
                    <li className="option">
                    <i ><img className="imgLloginNavbar" src={venta} alt="logo" />  Venta </i>
                        
                    </li>
                    <li className="option">
                    <i ><img className="imgLloginNavbar" src={persona} alt="logo" />  Personas </i>
                        
                    </li>

                    <li className="option">
                    <i ><img className="imgLloginNavbar" src={salir} alt="logo" />  Cerrar Sesión </i>
                        
                    </li>
                </ul>
            </nav>
   





        )

    }
}   

export default Navbar;