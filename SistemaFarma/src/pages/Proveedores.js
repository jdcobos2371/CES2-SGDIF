import React from 'react';
import '../styles/global.css'
import Navbar from '../components/Navbar'

import FormularioComponent from '../components/FormularioComponet';

class ProfileNew extends React.Component{
    state = {form: {
        firstName:'',
        lastName:'',
        jobTitle:'',
        email:'',
        twitter:'',
     
    }};

   

    handleChange = e =>{
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            },
        })
    }
    render(){
        return(
            <React.Fragment>
                <div className="container-fluid">
                    <div className="row">
                        <div className =" Navbar col-2">
                                <Navbar />
                        </div>
                        <div className="col-10">
                            <FormularioComponent 
                                onChange={this.handleChange}
                                formValues={this.state.form} 
                            />
                        </div>
                    </div >  
                    
                </div>
                
               
               
            </React.Fragment>
     
                 

        )
    }
}

export default ProfileNew;