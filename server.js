const express = require('express')
const app = express()

// imp ruta mongo

const archivoBD = require('./conexion')

// imp del archivo de rutas y modelo

const rutausuario = require('./rutas/usuario')

// imp body parser
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'true'}))

app.use('/api/usuario',rutausuario)

app.get('/',(req, res) => {
    res.end('Servidor backend')
}

)

// config server

app.listen(5000, function(){
    console.log('El servidor NODE funciona')
})
