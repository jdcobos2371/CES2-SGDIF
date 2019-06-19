import React, { Component } from 'react';
import '../styles/global.css';
import 'bootstrap/dist/css/bootstrap.css';
import logoPoli from '../images/login.png';


class LoginComponent extends Component {
    constructor(args){
        super(args)
        this.state = {
            name: '',
            password:  ''
        }

    }

    onChange(e){
        this.setState({
            [e.target.name]: e.target.value,
            [e.target.password]: e.target.value
        })
    }

    guadar(){

        this.validate();

    }

    validate(){
        if(this.state.name === ""){
            alert("dfdf");
        }
        
        if(this.state.password === ""){
            alert("dfdf");
        }


    
    }
    render(){
    
        
        return(
            <div className="containerLogin">
                <div className="containerLogin_contenido">
                    <div className="containerLogin_form">
                        <div className="loginHeader">
                            <p className="pheader">Sisfarma</p>
                            <img className="imgLlogin" src={logoPoli} />   
                        </div>

                        <form className="formLogin"   >
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <input className="form-control inputs" value={this.state.name} onChange={this.onChange.bind(this)} type="text" id="name" name="name"  placeholder="Usuario"/>
                                    </div>
                                    <div className="col-12">
                                        <input className="form-control inputs" value={this.state.password} onChange={this.onChange.bind(this)}type="password" id="password" name="password" placeholder="Contraseña"/>
                                    </div>
                                </div>
                            </div>
                          
                            <div className="buttons container">
                                <div className="row">
                                    <div className="col-12">
                                        <input className="btn_login" onClick={this.guadar.bind(this)} type="submit" value="Iniciar Sesión" />
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