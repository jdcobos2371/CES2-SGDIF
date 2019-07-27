import React from 'react';
import { Link } from 'react-router-dom'

import '../styles/global.css';
import 'bootstrap/dist/css/bootstrap.css';
import Proveedor from '../images/Proveedor.png';
import Producto from '../images/Productos.jpg';
import venta from '../images/Venta.png';
import persona from '../images/persona.png';
import salir from '../images/salir.png';

class Navbar extends  React.Component {
    render(){
        return(
            <React.Fragment>

<           nav className="sidebar">
                <ul className="contentbar">
                    <li className="option">
                    <Link to="/Menu/proveedores" ><i ><img className="imgLloginNavbar" src={Proveedor} alt="logo" />  Proveedor </i></Link>
                   
                        
                    </li>
                    <li className="option">
                     <Link to="/Menu/productos" ><i ><img className="imgLloginNavbar" src={Producto} alt="logo" />  Producto </i></Link>
                    </li>
                    <li className="option">
                        
                     <i ><img className="imgLloginNavbar" src={venta} alt="logo" /><Link to="/Menu/ventas" >Venta</Link></i>
                        
                    </li>
                    <li className="option">
                    <i ><img className="imgLloginNavbar" src={persona} alt="logo" /><Link to="/Menu/Personas" >Personas</Link></i>               
                    </li>

                    <li className="option">
                    <i ><img className="imgLloginNavbar" src={salir} alt="logo" />  Cerrar Sesión </i>
                        
                    </li>
                </ul>
            </nav>

            </React.Fragment>

          

        )

    }
}   

export default Navbar;