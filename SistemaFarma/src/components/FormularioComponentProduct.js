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
            [e.target.datef]: e.target.value,
            [e.target.datev]: e.target.value,
            [e.target.cant]: e.target.value,
            [e.target.val]: e.target.value,
            [e.target.submit]: e.target.value,
        })
    }

    guadar(){

        this.validate();

    }

    validate(){
        if(this.state.name === ""){
            alert("Campo nombre vacio");
        }

        if(this.state.datef === ""){
            alert("Campo fecha de fabricación vacio");
        }

        if(this.state.datef === ""){
            alert("Campo fecha de vencimiento vacio");
        }
        
        if(this.state.cant === ""){
            alert("Campo cantidad vacio");
        }

        if(this.state.val === ""){
            alert("Campo valor vacio");
        }

    

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
                                    <label>*Nombre Proveedor</label>
                                        <input className="form-control inputs" value={this.state.name} onChange={this.onChange.bind(this)}type="text" id="name" name="name" placeholder="Nombre proveedor"/>
                                    </div>
                                    <div className="col-6">
                                        <label>*Fecha de fabricación</label>
                                        <input className="form-control inputs" value={this.state.datef} onChange={this.onChange.bind(this)} type="date" id="datef" name="datef"  placeholder="DD-MM-AAAA"/>
                                    </div>
                                    <div className="col-6">
                                        <label>*Fecha de vencimiento</label>
                                        <input className="form-control inputs" value={this.state.datev} onChange={this.onChange.bind(this)} type="date" id="datev" name="datev"  placeholder="DD-MM-AAAA"/>
                                    </div>
                                    <div className="col-6">
                                        <label>*Cantidad disponible</label>
                                        <input className="form-control inputs" value={this.state.cant} onChange={this.onChange.bind(this)} type="number" id="cant" name="cant"  placeholder="cantidad disponible"/>
                                    </div>
                                    
                                </div>

                                <div className="row">
                                    <div className="col-6">
                                        <label>*Valor de producto</label>
                                        <input className="form-control inputs" value={this.state.val} onChange={this.onChange.bind(this)} type="number" id="val" name="val"  placeholder="Valor producto"/>
                                    </div>
                                        <div className="col-6">
                                        <label>*Categoria</label>
                                        <select class="form-control inputs" >
                                        <option > --Selecciona una opción--</option>
                                        <option > Medicamentos</option>
                                        <option > Higiene </option>
                                        <option > Infantil </option>
                                        <option > Comestica </option>
                                        
                                </select>
                                </div>
                               
                                    
                            </div>
                                <div className="row">
                                <div className="col-6">
                                        <label>*Marcas</label>
                                        <select class="form-control inputs">
                                        <option > --Selecciona una opción--</option>
                                        <option > Eucerin</option>
                                        <option > Bayer </option>
                                        <option > j&j </option>
                                        <option > Oral-B </option>
                                        <option > Huggies </option>
                                </select>
                                </div>
                                <div className="col-6">
                                        <label>*Presentación</label>
                                        <select class="form-control inputs">
                                        <option > --Selecciona una opción--</option>
                                        <option > Unidad</option>
                                        <option > Sobre </option>
                                        <option > Paquete </option>
                                        <option > Docena </option>
                                </select>
                                </div>

                                
                                <div className="buttons container col-6">
                                    <input className="btn_login" onClick={this.guadar.bind(this)} type="submit" id="submit" name="submit" value="Guardar Productos" />
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

export default FormularioComponentProducts;