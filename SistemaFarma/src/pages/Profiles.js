import React from 'react'
import '../styles/global.css';
import axios from 'axios'





class ProfileList extends React.Component{



    
    state = {
        id: '',
        persons: []
      }

     
    
      handleChange = event => {
        this.setState({ id: event.target.value });
      }
    
      handleSubmit = event => {
        event.preventDefault();
    
        axios.delete(`http://localhost:5700/api/ProfileApiService/${this.state.id}`)
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
      }
    
      componentDidMount() {
        axios.get(`http://localhost:5700/api/ProfileApiService`)
          .then(res => {
            const persons = res.data;
            this.setState({ persons });
          })
      }
    
      render() {
        return (
          
            <div className="container datos">
                     <div className="row">
              <div className="col">
                        <label>Nit Proveedor</label> 
                        <br/>
                        { this.state.persons.map(person => <div>{person.nit}</div>)}
                </div>

                <div className="col">
                        <label>Nombre Proveedor</label> 
                        <br/>
                        { this.state.persons.map(person => <div>{person.name}</div>)}
                </div>

                <div className="col">
                        <label>teléfono Proveedor</label> 
                        <br/>
                        { this.state.persons.map(person => <div>{person.telefono}</div>)}
                </div>

                <div className="col">
                        <label>Dirección Proveedor</label> 
                        <br/>
                        { this.state.persons.map(person => <div>{person.direccion}</div>)}
                </div>

                <div className="col">
                        <label>Productos Proveedor</label> 
                        <br/>
                        { this.state.persons.map(person => <div>{person.productos}</div>)}
                </div>

                <div>
                
            </div>  
              </div>
            </div>
           
              
      
          
        )
      }
    }

export default ProfileList;
