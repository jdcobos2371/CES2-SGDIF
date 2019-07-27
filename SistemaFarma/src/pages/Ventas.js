import React from 'react';
import '../styles/global.css'
import Navbar from '../components/Navbar'
import VentasComponent from '../components/components.Ventas';

class ProfileNew extends React.Component{

    render(){
        return(
     
                            <div className="container-fluid">

                            
                    <div className="row">


                        <div className =" Navbar col-2">
                                <Navbar />
                        </div>
                        
                        <div className="col-10">
                                <VentasComponent/>  
                      </div>
               </div>   
            </div>
 



        )
    }
}

export default ProfileNew;