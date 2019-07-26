import React, { Component } from 'react';
import '../styles/global.css';
import '../styles/FormularioComponet.css';
import 'bootstrap/dist/css/bootstrap.css';
import logoPoli from '../images/persona.png';


class FormularioPersonas extends Component {
    constructor(args){
        super(args)
        this.state = {
            
            name: '',
            apellido:  '',
            TipoDoc: '',
            identificacion: '',
            direccion: '',
            telefono: '',
            perfil: '', 
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
       
      }

    
    render(){
    
        
        return(
            <div className="containerFormulario">
                <div className="containerFormulario_contenido">
                    <div className="containerLogin_form">
                        <div className="loginHeader">
                            <p className="pheader">Registro de persona</p>
                            <img className="imgLlogin" src={logoPoli} alt="logo" />   
                        </div>

                        <form className="formLogin"   >
                            <div className="container">
                                <div className="row">
                                    <div className="col-6">
                                        <label><font color="#0578F9">*</font>Nombres</label>
                                        <input className="form-control inputs" value={this.state.name} onChange={this.onChange.bind(this)} type="text" id="name" name="name"  placeholder="Nombres" required/>
                                    </div>
                                    <div className="col-6">
                                    <label><font color="#0578F9">*</font>Apellidos</label>
                                        <input className="form-control inputs" value={this.state.apellido} onChange={this.onChange.bind(this)}type="text" id="apellido" name="apellido" placeholder="Apellidos" required
                                        />
                                    </div>
                                    </div>
                                    <div className="row">
                                    <div className="col-6">

                                    <label onblur="validarRecepcionado()"><font color="#63ABFC">*</font>Tipo de documento</label>
                                    <select class="form-control inputs" id="TipoDoc">
                                    <option value="" >Seleccione</option>
                                    <option value="1">Cédula de ciudadanía</option>
                                    <option value="2">Cédula extranjera</option>
                                    <option value="3">Pasaporte</option>
                                    <option value="4">Tarjeta de identidad</option>
                                </select>
                                    </div>
                                    <div className="col-6">
                                    <label><font color="#0578F9">*</font>Identificación</label>
                                        <input className="form-control inputs" value={this.state.identificacion} onChange={this.onChange.bind(this)} type="text" id="identificacion" name="identificacion"  placeholder="Identificación" required/>
                                    </div>
                                    </div>
                                    <div className="row">
                                    <div className="col-6">
                                        <label>Dirección</label>
                                        <input className="form-control inputs" value={this.state.direccion} onChange={this.onChange.bind(this)} type="text" id="direccion" name="direccion"  placeholder="Dirección"/>
                                    </div>
                                    <div className="col-6">
                                        <label><font color="#0578F9">*</font>Teléfono</label>
                                        <input className="form-control inputs" value={this.state.telefono} onChange={this.onChange.bind(this)} type="number" id="telefono" name="telefono"  placeholder="Teléfono" required/>
                                    </div>
                                    </div>
                                    <div className="row">
                                <div className="col-6">
                                    <label><font color="#0578F9">*</font>Perfil</label>
                                    <select class="form-control inputs" id="perfil" required>
                                    <option value="0" >Seleccione</option>
                                    <option value="1" >Administrador</option>
                                    <option value="2" >Vendedor</option>
                                    <option value="3" >Cliente</option>
                                </select>
                                </div>
                                <div className="buttons container col-6">
                                    <input className="btn_guardarPersona" onClick={this.guadar.bind(this)} type="submit" value="Registrar" />
                                    
                                </div> 
                                
                                </div>
                
                                    <div className="row"></div>
                               
     
                                    
                                    </div>
                          
                        </form>
                        
                </div>
                
             </div>
         </div>
        )
    }
}

export default FormularioPersonas;