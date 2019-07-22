import React, { Component } from 'react';
import '../styles/global.css';
import '../styles/FormularioComponet.css';
import 'bootstrap/dist/css/bootstrap.css';
import logoPoli from '../images/Proveedor.png';
import ProfileList from '../pages/Profiles';
import axios from 'axios'
import { Link } from 'react-router-dom'

class FormularioComponent extends Component {
    constructor(){
        super()
        this.state = {
            nit: '',
            name: '',
            direccion: '',
            telefono: '',
            productos: '',
            
        };
    }

    dataChange(e){
        this.setState({
            [e.target.nit]: e.target.value,
            [e.target.name]: e.target.value,
            [e.target.telefono]: e.target.value,
            [e.target.direccion]: e.target.value,
            [e.target.productos]: e.target.value,
       
        })
    }

    postData(e){
        e.preventDefault()

        const nit = this.state.nit
        const name = this.state.name
        const telefono = this.state.telefono
        const direccion = this.state.direccion
        const productos = this.state.productos

        this.setState({
            loading:true
        })

        const data = {
            nit,
            name,
            telefono,
            direccion,
            productos

        }


        axios.post('http://localhost:5700/api/profiles', data)
        .then(Response =>{
            console.log(Response);
            this.setState({
                loading:false,
                message:Response.data
            })
        })
        .catch( err =>{
            console.log(err);
            this.setState({
                loading: false
            })
        })
        
    }

    loadOrShowMsg(){
        if(this.state.loading){
            return <p>loading</p>
        }else{
            return <p>{this.state.message}</p>
        }
    }

    


   
   
    render(){
        return(
            <React.Fragment>
                <div className="containerFormulario">
                                <div className="containerFormulario_contenido">
                                    <div className="containerLogin_form">

                                        <div className="loginHeader">
                                            <div className="row">
                                                <div className="col-4">
                                                    <p className="pheader">Proveedores</p>
                                                </div>
                                                <div className="col-4 contbutton" >
                                                    <img className="imgLlogin" src={logoPoli} alt="logo" /> 
                                                </div>
                                                 
                                            
                                                <div className="col-4 contbutton" >
                                                <Link to="/Menu/proveedores/listar" className="buton_listar btn_login">Listar Proveedores</Link>
                                            </div>

                                            </div>
                                                
                                      </div>


                                        <form className="formLogin" onSubmit={this.postData.bind(this)}  >
                                           
                                            <div className="container">
                                                <div className="row">

                                                    <div className="col-6">
                                                        <label>Nit Proveedor</label>
                                                        <input 
                                                               onChange={this.dataChange.bind(this)}
                                                               key = {this.dataChange.bind(this)}
                                                               className="form-control inputs" 
                                                               type="text" 
                                                               name="nit"  
                                                               value={this.state.nit}
                                                               placeholder="Nit"
                                                               />
                                                    </div>
                                                    <div className="col-6">
                                                        <label>Nombre Proveedor</label>
                                                        <input 
                                                              onChange={this.dataChange.bind(this)}
                                                              className="form-control inputs" 
                                                              type="text" 
                                                              name="name"  
                                                              value={this.state.name}
                                                              placeholder="Nombre"/>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-6">
                                                        <label>Dirección</label>
                                                        <input 
                                                              onChange={this.dataChange.bind(this)}
                                                              className="form-control inputs" 
                                                              type="text" 
                                                              name="direccion"  
                                                              value={this.state.direccion}
                                                              placeholder="direccion"/>
                                                    
                                                    </div>
                                                    <div className="col-6">
                                                        <label>Teléfono Proveedor</label>
                                                        <input 
                                                              onChange={this.dataChange.bind(this)}
                                                              className="form-control inputs" 
                                                              type="text" 
                                                              name="telefono"  
                                                              value={this.state.telefono}
                                                              placeholder="telefono"/>
                                                    </div> 
                                                </div>
                                                
                                                <div className="row">
                                                   <div className="col-6">
                                                        <label>Producto</label>
                                                        <input 
                                                              onChange={this.dataChange.bind(this)}
                                                              className="form-control inputs" 
                                                              type="text" 
                                                              name="productos"  
                                                              value={this.state.productos}
                                                              placeholder="productos"/>
                                                    </div> 

                                                <div className="buttons container col-3">
                                                    <button onClick={this.handleClick} className="btn_login">Guardar Proveedor</button>
                                                </div>  
                                            </div>
                                        </div> 
                                    </form>

                                </div>
                            </div>

                            <div className="info">
                                < ProfileList/>
                            </div>
                           
                     </div>

                    
                           
                       
    </React.Fragment>






           
         
              
        )
    }
}

export default FormularioComponent;