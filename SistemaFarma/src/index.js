import React from 'react';
import ReactDOM from 'react-dom';
import Login from '../src/pages/Login';

//importar bootstrap, recuerda hacer npm install bootstrap
import 'bootstrap/dist/css/bootstrap.css'


const container = document.getElementById('app');


ReactDOM.render(<Login />, container);