import React, { Component } from 'react';
import '../styles/global.css';
import 'bootstrap/dist/css/bootstrap.css';
import logoPoli from '../images/login.png';


class LoginComponent extends Component {
    constructor(args){
        super(args)
        this.state = {
            name: '',
            password:  '',
            submit: ''
        }

    }

    onChange(e){
        this.setState({
            [e.target.name]: e.target.value,
            [e.target.password]: e.target.value,
        })
    }

    guadar(){

        this.validate();

    }

    render(){
    
        
        return(
            <div className="containerLogin">
                <div className="containerLogin_contenido">
                    <div className="containerLogin_form">
                        <div className="loginHeader">
                            <p className="pheader">Sisfarma</p>
                            <img className="imgLlogin" src={logoPoli} alt="logoPoli" />   
                        </div>

                        <form className="formLogin"   >
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <label></label>
                                        <input className="form-control inputs" value={this.state.name} onChange={this.onChange.bind(this)} type="text" id="name" name="name"  placeholder="Usuario" required/>
                                    </div>
                                    <div className="col-12">
                                        <input className="form-control inputs" value={this.state.password} onChange={this.onChange.bind(this)}type="password" id="password" name="password" placeholder="Contraseña" required/>
                                    </div>
                                </div>
                            </div>
                          
                            <div className="buttons container">
                                <div className="row">
                                    <div className="col-12">
                                    
                                        <a href="/Menu/proveedores">
                                        <span class="btn_login" className="btn_login" onClick={this.guadar.bind(this)}  name="submit" type="submit"> Inicio sesión </span>
                                        </a>
                                        
                                       < span onClick={this.guadar.bind(this)} ></span>
                                  </div>
                                </div>
                            </div>  

                        </form>
                </div>
             </div>
         </div>
        )
    }
    
    validate(){
        if(this.state.name === ""){
            alert("Ingrese Usuario del sistema");
            
        }
        
        if(this.state.password === ""){
            alert("Ingrese Contraseña");
        }

        if(this.state.password !== "admin"){
            alert("Usuario incorrecta");
        }


        if(this.state.password !== "123"){
            alert("Contraseña incorrecta");
        }




    }
}

export default LoginComponent;