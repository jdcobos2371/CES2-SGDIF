import React from 'react';
//import { Link } from 'react-router-dom'

import ProfileList from '../components/ProfileListComponent';
import '../styles/global.css';
import axios from 'axios'
class Profiles extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            listProfiles: []
        };

    }

    componentDidMount(){ 
        //https://rickandmortyapi.com/api/character/
        axios.get('http://localhost:5700/api/profiles')
        .then(res =>{
            this.setState({
                listProfiles:res.data.data
            })
        }).catch(err => console.log(err))
    }

    render(){
        return (
            <React.Fragment>
                <div className="Profiles__list">
                    <div className="Profiles_container"> 
                        <ProfileList profiles = {this.state.listProfiles} /> 
                    </div>

                </div>
            </React.Fragment>
            
        )
    }
}

export default Profiles