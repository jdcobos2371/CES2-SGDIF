import React from 'react';
import ReactDOM from 'react-dom';
import LoginComponent from '../src/components/LoginComponent';

//importar bootstrap, recuerda hacer npm install bootstrap
import 'bootstrap/dist/css/bootstrap.css'


const container = document.getElementById('app');


ReactDOM.render(<LoginComponent />, container);