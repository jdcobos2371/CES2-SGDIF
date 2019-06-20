
import React from 'react'
import { Link } from 'react-router-dom'
import fondo from '../images/Fondo.jpg';
import '../styles/global.css';

function Home() {
	return (
        <div>
            <div className="cortina">
                <div className="imgbackground">
                    <img className="home-video-play" src={fondo}></img>
                </div> 
            </div>
        </div>
	)
}

export default Home;