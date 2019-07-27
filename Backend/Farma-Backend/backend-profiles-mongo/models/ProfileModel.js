const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const proveedores  = new Schema({
    nit : String,
    name : String,
    telefono : String,
    direccion : String,
    productos:  String,
}, {timestamps:true});

const Profile = mongoose.model('Profile',proveedores );

module.exports = {Profile}