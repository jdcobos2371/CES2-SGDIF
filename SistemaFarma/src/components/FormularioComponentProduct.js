import React, { Component } from 'react';
import '../styles/global.css';
import '../styles/FormularioComponet.css';
import 'bootstrap/dist/css/bootstrap.css';
import logoProdu from '../images/Productos.jpg';


class FormularioComponentProducts extends Component {
    constructor(args){
        super(args)
        this.state = {
            name: '',
            password:  '',
            datef:  '',
            datev:  '',
            cant:  '',
            val:  '',
            submit : ''
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

    validate(){

    }

    render(){
    
        
        return(
            <div className="containerFormulario">
                <div className="containerFormulario_contenido">
                    <div className="containerLogin_form">
                        <div className="loginHeader">
                            <p className="pheader">Productos</p>
                            <img className="imgLlogin" src={logoProdu} alt="logo" />   
                        </div>

                        <form className="formLogin"   >
                            <div className="container">
                                <div className="row">
                                    <div className="col-6">
                                    <label><font color="#0578F9">*</font>Nombre Proveedor</label>
                                        <input className="form-control inputs" value={this.state.name} onChange={this.onChange.bind(this)}type="text" id="name" name="name" placeholder="Nombre proveedor" required/>
                                    </div>
                                    <div className="col-6">
                                        <label><font color="#0578F9">*</font>Fecha de fabricación</label>
                                        <input className="form-control inputs" value={this.state.datef} onChange={this.onChange.bind(this)} type="date" id="datef" name="datef"  placeholder="DD-MM-AAAA" required/>
                                    </div>
                                    <div className="col-6">
                                        <label><font color="#0578F9">*</font>Fecha de vencimiento</label>
                                        <input className="form-control inputs" value={this.state.datev} onChange={this.onChange.bind(this)} type="date" id="datev" name="datev"  placeholder="DD-MM-AAAA" required/>
                                    </div>
                                    <div className="col-6">
                                        <label><font color="#0578F9">*</font>Cantidad disponible</label>
                                        <input className="form-control inputs" value={this.state.cant} onChange={this.onChange.bind(this)} type="number" id="cant" name="cant"  placeholder="cantidad disponible" required/>
                                    </div>
                                    
                                </div>

                                <div className="row">
                                    <div className="col-6">
                                        <label><font color="#0578F9">*</font>Valor de producto</label>
                                        <input className="form-control inputs" value={this.state.val} onChange={this.onChange.bind(this)} type="number" id="val" name="val"  placeholder="Valor producto" required/>
                                    </div>
                                        <div className="col-6">
                                        <label><font color="#0578F9">*</font>Categoria</label>
                                        <select class="form-control inputs" >
                                        <option value=""> --Selecciona una opción--</option>
                                        <option value="1"> Medicamentos</option>
                                        <option value="2"> Higiene </option>
                                        <option value="3"> Infantil </option>
                                        <option value="4"> Comestica </option>
                                        
                                </select>
                                </div>
                               
                                    
                            </div>
                                <div className="row">
                                <div className="col-6">
                                        <label><font color="#0578F9">*</font>Marca</label>
                                        <select class="form-control inputs">
                                        <option value=""> --Selecciona una opción--</option>
                                        <option value="1"> Eucerin</option>
                                        <option value="2"> Bayer </option>
                                        <option value="3"> j&j </option>
                                        <option value="4"> Oral-B </option>
                                        <option value="5"> Huggies </option>
                                </select>
                                </div>
                                <div className="col-6">
                                        <label><font color="#0578F9">*</font>Presentación</label>
                                        <select class="form-control inputs">
                                        <option value=""> --Selecciona una opción--</option>
                                        <option value="1"> Unidad</option>
                                        <option value="2"> Sobre </option> 
                                        <option value="3"> Paquete </option>
                                        <option value="4"> Docena </option>
                                </select>
                                </div>

                                    <div className="buttons container col-6">
                                        <input className="btn_guardarProductos" onClick={this.guadar.bind(this)} type="submit" name="submit" value="Guardar Productos" />
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

export default FormularioComponentProducts;