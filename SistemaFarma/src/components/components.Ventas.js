import React, { Component } from 'react';
import '../styles/global.css';
import '../styles/VentasComponents.css';
import 'bootstrap/dist/css/bootstrap.css';
import logoPoli from '../images/Venta.png';



class FormularioComponent extends Component {
    constructor(args){
        super(args)
        this.state = {
            Producto: '',
            Fecha:  ' ',
            Unidades:  '',
            
            
        }

    }

    onChange(e){
        this.setState({
            [e.target.Producto]: e.target.value,
            [e.target.Fecha]: e.target.value,
            [e.target.Unidades]: e.target.value
        })
    }

    guadar(){

        this.validate();

    }

    validate(){
        if(this.state.Producto === ""){
            alert("Este campo es  obligatorio, por favor seleccione un producto de venta");
        }
        
        if(this.state.Fecha === ""){
            alert("Este campo es  obligatorio, por favor seleccione una fecha ");
        }
       
        if(this.state.Unidades === ""){
            alert("Este campo es  obligatorio, por favor ingrese las cantidades de la venta ");
        }

    
    }
    render(){
    
        
        return(
            <div className="containerFormulario">
                <div className="containerFormulario_contenido">
                    <div className="containerLogin_form">
                        <div className="loginHeader">
                            <p className="pheader" font size="380">Nueva venta</p>
                            <img className="imgLlogin" src={logoPoli} alt="logo"/>   
                        </div>

                        

                        <form className="formLogin"   >

                            <div className="container">
                                <div className="row">
                                    <div className="col-6">
                                        <label>Número venta</label>
                                        <input className="form-control inputs" value={this.state.name} onChange={this.onChange.bind(this)} type="number" id="name" name="name"  placeholder="Número  de venta" pattern="[A-Za-z0-9]+" required/>
                                    </div>
                                    <div className="col-6">
                                    <label>*Producto</label>
                                    <select class="form-control inputs"  value={this.state.Producto} onChange={this.onChange.bind(this)} >
                                    <option ></option>
                                    <option ></option>
                                    <option ></option>
                                     </select>   
                                    </div>
                                    </div>

                                    <div className="row">
                                    <div className="col-6">
                                         <label>*Fecha</label>
                                        <input className="form-control inputs" value={this.state.Fecha} onChange={this.onChange.bind(this)} type="date" id="name" name="name"  placeholder="Dirección" required/>
                                    </div>
                                    
                                     <div className="col-6">
                                        <label>*Unidades</label>
                                             <input className="form-control inputs" value={this.state.Unidade} onChange={this.onChange.bind(this)}type="number" id="venta" name="venta" placeholder="Unidades de venta" required/>
                                        </div>
                                        </div>
                             
                                     <div className="row">
                                        <div className="col-6">
                                            <label>Iva</label>
                                            <input className="form-control inputs" value={this.state.password} onChange={this.onChange.bind(this)}type="number" id="iva" name="unidades" placeholder="Iva del 19%"/>
                                            </div>
                                         
                                        <div className="col-6">
                                        <label>*Total</label>
                                         <input className="form-control inputs" value={this.state.password} onChange={this.onChange.bind(this)}type="number" id="iva" name="unidades" placeholder="Total de venta"required/>
                                    </div>
                                    </div>
                                    </div>
                                    
                                
                                    
                                
                                <div className="buttons container col-6">
                                    <input className="btn_login" onClick={this.guadar.bind(this)} type="submit" value="Guardar venta" />
                                </div>  
                            
                                
                          

                           
                          
                        </form>
                </div>
                <div className="h1">

                                        <h1>Nota: los campo con * son obligatorios</h1>

                                    </div>
             </div>

             <div className="row"></div>
     <div className="formLogin1" >
<table id="example" class="formLogin1">
<thead>
            <tr>
            <th>Número de venta</th>
            <th>Producto</th>
            <th>Fecha de venta</th>
            <th>Unidades vendidas</th>
            <th>Iva del 19% </th>
            <th>Valor total</th>
            <th>Opciones (Modificar o eliminar venta)</th>
            </tr>
            </thead>
            </table>
            </div>    
         </div>

           
        )
    }
}

export default FormularioComponent;



