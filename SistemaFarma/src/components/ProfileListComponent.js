import React from 'react'
import '../styles/global.css';
import axios from 'axios'





class ProfileList extends React.Component{
    

        state = {
            id: '',
        }

        handleChange = event => {
            this.setState({ id: event.target.value });
          }

          handleSubmit = event => {
            event.preventDefault();
        
            axios.delete(`http://localhost:5700/api/profiles/${this.state.id}`)
              .then(res => {
                console.log(res);
                console.log(res.data);
              })
          }
    render(){
        return (
            <ul className="list-unstyled">
                {this.props.profiles.map(profile => {
                    return(
                        <li key={profile.id} className='Profile__section-name-list'>
                        <div className="grid">
                            <div className="row">
                                    
                                    <div className="col">
                                    <label>Nit</label> 
                                    <br/>
                                    {profile.nit}
                                    </div>
                                    <div  className="col">
                                        <label>Nombre</label>
                                        <br/>
                                        {profile.name}
                                    </div>
                                    <div  className="col">
                                        <label>teléfono</label>
                                        <br/>
                                         {profile.telefono}
                                    </div>
                                    <div  className="col">
                                        <label>Dirección</label>
                                        <br/>
                                         {profile.direccion}
                                    </div>
                                    <div  className="col">
                                        <label>Productos</label>
                                        <br/>
                                        {profile.productos}
                                    </div>
                                </div>
                            </div>
                            
                            
                                
                                
                              
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export default ProfileList;