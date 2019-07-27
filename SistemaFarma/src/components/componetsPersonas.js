import React, { Component } from 'react';
import '../styles/global.css';
import '../styles/FormularioComponet.css';
import 'bootstrap/dist/css/bootstrap.css';
import logoPoli from '../images/Proveedor.png';


class FormularioComponent extends Component {
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
            <div className="containerFormulario">
                <div className="containerFormulario_contenido">
                    <div className="containerLogin_form">
                        <div className="loginHeader">
                            <p className="pheader">Personas</p>
                            <img className="imgLlogin" src={logoPoli} />   
                        </div>

                        <form className="formLogin"   >
                            <div className="container">
                                <div className="row">
                                    <div className="col-6">
                                        <label>nombre personas</label>
                                        <input className="form-control inputs" value={this.state.name} onChange={this.onChange.bind(this)} type="text" id="name" name="name"  placeholder="nombre"/>
                                    </div>
                                    <div className="col-6">
                                    <label>Nombre Proveedor</label>
                                        <input className="form-control inputs" value={this.state.password} onChange={this.onChange.bind(this)}type="password" id="password" name="password" placeholder="Nombre"/>
                                    </div>

                                    
                                </div>

                                <div className="row">
                                    <div className="col-6">
                                    <label>Dirección</label>
                                        <input className="form-control inputs" value={this.state.name} onChange={this.onChange.bind(this)} type="text" id="name" name="name"  placeholder="Dirección"/>
                                    </div>
                                    <label></label>
                                    <div className="col-6">
                                    <label>Teléfono Proveedor</label>
                                        <input className="form-control inputs" value={this.state.password} onChange={this.onChange.bind(this)}type="password" id="password" name="password" placeholder="Teléfono"/>
                                    </div>

                                    
                                </div>

                                

                                <div className="row">
                                <div className="col-6">
                                    <label>Productos ofertados</label>
                                    <select class="form-control inputs">
                                    <option ></option>
                                    <option ></option>
                                    <option ></option>
                                </select>
                                </div>
                                <div className="buttons container col-6">
                                    <input className="btn_login" onClick={this.guadar.bind(this)} type="submit" value="Guardar Proveedor" />
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

export default FormularioComponent;