import React, { Component } from 'react';
import '../styles/global.css';
import 'bootstrap/dist/css/bootstrap.css';
import logoPoli from '../images/login.png';


class LoginComponent extends Component {
    render(){
    
        
        return(
            <div className="containerLogin">
                <div className="containerLogin_contenido">
                    <div className="containerLogin_form">
                        <div className="loginHeader">
                            <p className="pheader">Sisfarma</p>
                            <img className="imgLlogin" src={logoPoli} />   
                        </div>

                        <form className="formLogin">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <input className="form-control inputs" type="text" name="name"  placeholder="Usuario"/>
                                    </div>
                                    <div className="col-12">
                                        <input className="form-control inputs" type="text" name="name" placeholder="Contraseña"/>
                                    </div>
                                </div>
                            </div>
                          
                            <div className="buttons container">
                                <div className="row">
                                    <div className="col-12">
                                        <input className="btn_login" type="submit" value="Iniciar Sesión" />
                                  </div>
                                </div>
                            </div>  

                        </form>
                </div>
             </div>
         </div>
        )
    }
}

export default LoginComponent;