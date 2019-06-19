import React from 'react';
import LoginComponent from '../components/LoginComponent';
import TopBar from '../components/topBar.js';


class Login extends React.Component{
    render(){
        return(
            <div>
                 <TopBar/>
                <div  className="container">
                    <LoginComponent />
                </div>
            </div>
            
          
         
                
         
        )
    }
}

export default Login;