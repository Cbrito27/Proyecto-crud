const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/crudproyecto');

const objetobd = mongoose.connection

objetobd.on('connected', ()=>{console.log('Conectado MongoDB')})
objetobd.on('error', ()=>{console.log('Error de conexion MongoDB')})

module.exports = mongoose