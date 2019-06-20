import React, { Component } from 'react';
import '../styles/global.css';
import 'bootstrap/dist/css/bootstrap.css';
 


class Navbar extends Component {
    render(){
        return(


        
            <nav className="sidebar">
                <ul className="contentbar">
                    <li className="active">
                    <i className="fas fa-truck"></i>
                        <span className="tooltip">Connections</span>
                    </li>
                    <li>
                        <i className="fa fa-hdd-o"></i>
                        <span className="tooltip">Devices</span>
                    </li>
                    <li>
                        <i className="fa fa-newspaper-o"></i>
                        <span className="tooltip">Contacts</span>
                    </li>
                    <li>
                        <i className="fa fa-print"></i>
                        <span className="tooltip">Fax</span>
                    </li>
                    <li>
                        <i className="fa fa-sliders"></i>
                        <span className="tooltip">Settings</span>
                    </li>
                </ul>
            </nav>
   





        )

    }
}   

export default Navbar;