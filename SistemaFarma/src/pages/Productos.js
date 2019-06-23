import React from 'react';
import '../styles/global.css'
import Navbar from '../components/Navbar'
import FormularioComponentProduct from '../components/FormularioComponentProduct';

class Products extends React.Component{

    render(){
        return(
     
                <div className="container-fluid">

                    <div className="row">

                        <div className =" Navbar col-2">
                                <Navbar />
                        </div>
                        
                        <div className="col-10">
                                <FormularioComponentProduct/>  
                        </div>
                    </div>   
                        
                  </div>

        )
    }
}

export default Products;