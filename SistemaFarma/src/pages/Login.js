import React from 'react';
import LoginComponent from '../components/LoginComponent';
import TopBar from '../components/topBar.js';
import fondo from '../images/Fondo.jpg';


class Login extends React.Component{
    
    render(){
        return (
           <React.Fragment>
            <LoginComponent>
            </LoginComponent>  
           </React.Fragment>    
       )
   }
}

export default Login;