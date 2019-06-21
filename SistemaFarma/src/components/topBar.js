import React, { Component } from 'react';
import '../styles/global.css';
import 'bootstrap/dist/css/bootstrap.css'; 
import logoSisfarma from '../images/LogoSisfarma.png';

class topBar extends Component{
    render(){
        return(
        <div >
        <div className="row">
            <div className="col-12">
            <div className="topbar">
                <div className="container-fluid">
                    <div className="row">

                    <div className="titulo-topbar col-3">
                        <h2 className="sisfarmaText">Sisfarma</h2>
                    </div>
                    <div className="img-topbar col-9">
                        <img className="img-log" src={logoSisfarma} alt="logoSisfarma" />  
                    </div>
                       
                </div>
                </div>
            </div>
            </div>

            
         </div>
         </div>
        )
    }

}

export default topBar;