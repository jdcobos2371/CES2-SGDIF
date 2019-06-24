import React, { Component } from 'react';
import '../styles/global.css';
import '../styles/FormularioComponet.css';
import 'bootstrap/dist/css/bootstrap.css';
import logoPoli from '../images/Proveedor.png';


class FormularioComponent extends Component {
    constructor(args){
        super(args)
        this.state = {
            nit: '',
            nombre:  '',
            direccion: '',
            telefono:  ''
        }

    }

    onChange(e){
        this.setState({
            [e.target.nit]: e.target.value,
        })
    }

    guadar(){

        this.validate();

    }

    validate(){
        if(this.state.nit === ""){
            alert("Campo obligatorio, Ingrese el Nit");
        }

        if(this.state.nombre === ""){
            alert("Campo obligatorio, Ingrese el nombre");
        }
        
        if(this.state.direccion === ""){
            alert("Campo obligatorio, Ingrese la dirección");
        }
        
        if(this.state.telefono === ""){
            alert("Campo obligatorio, Ingrese el teléfono");
        }
        
        
      

    
    }
    render(){
    
        
        return(
            <div className="containerFormulario">
                <div className="containerFormulario_contenido">
                    <div className="containerLogin_form">
                        <div className="loginHeader">
                            <p className="pheader">Proveedores</p>
                            <img className="imgLlogin" src={logoPoli} alt="logo" />   
                        </div>
                        <form className="formLogin"   >
                            <div className="container">
                                <div className="row">
                                    <div className="col-6">
                                        <label>Nit Proveedor</label>
                                        <input className="form-control inputs" value={this.state.campo} onChange={this.onChange.bind(this)} type="text" id="name" name="name"  placeholder="Nit"/>
                                    </div>
                                    <div className="col-6">
                                    <label>Nombre Proveedor</label>
                                        <input className="form-control inputs" value={this.state.campo} onChange={this.onChange.bind(this)}type="password" id="password" name="password" placeholder="Nombre"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                    <label>Dirección</label>
                                        <input className="form-control inputs" value={this.state.campo} onChange={this.onChange.bind(this)} type="text" id="name" name="name"  placeholder="Dirección"/>
                                    </div>
                                    <label></label>
                                    <div className="col-6">
                                    <label>Teléfono Proveedor</label>
                                        <input className="form-control inputs" value={this.state.campo} onChange={this.onChange.bind(this)}type="password" id="password" name="password" placeholder="Teléfono"/>
                                    </div> 
                                </div>
                                 <div className="row">
                                    <div className="col-6">
                                        <label>Productos ofertados</label>
                                        <select className="form-control inputs">
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

             <div className="formLogin1"><table id="example" className="formLogin1">
                 <thead>
                     <tr>
                         <td>Nit Proveedor</td>
                         <td>Nombre Proveedor</td>
                         <td>Dirección</td>
                         <td>Teléfono Proveedor</td>
                         <td>Modificar o eliminar</td>
                         </tr>
                        </thead>
                    </table>
                </div>    

         </div>

         
              
        )
    }
}

export default FormularioComponent;