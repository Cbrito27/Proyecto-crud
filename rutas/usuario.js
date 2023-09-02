const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
const eschema = mongoose.Schema

const eschemausuario = new eschema({
    nombre: String,
    correo: String,
    contraseña: String,
    idusuario: String
})

const ModeloUsuario = mongoose.model('usuarios', eschemausuario)

module.exports = router

// agregar usuarios
router.post('/agregarusuario',(req,res) => {
    const nuevousuario = new ModeloUsuario({
        nombre: req.body.nombre,
        correo: req.body.correo,
        contraseña: req.body.contraseña,
        idusuario: req.body.idusuario
    })
    nuevousuario.save(function(err){
        if(!err){
            res.send('usuario agregado correctamente')
        } else{
            res.send(err)
        }
    })
})


//obtener usuarios

router.get('/obtenerusuarios',(req,res) => {
    ModeloUsuario.find({}, function(docs, err){
        if(!err){
            res.send(docs)
        } else{
            res.send(err)
        }
    })
})

//obtener usuarios data

router.post('/obtenerdatausuario',(req,res) => {
    ModeloUsuario.find({idusuario:req.body.idusuario}, function(docs, err){
        if(!err){
            res.send(docs)
        } else{
            res.send(err)
        }
    })
})

// actualizar
router.post('/actualizausuario',(req, res) => {

ModeloUsuario.findOneAndUpdate({idusuario:req.body.idusuario}, {
    nombre: req.body.nombre,
    correo: req.body.correo,
    contraseña: req.body.contraseña
}, (err) => {
     if(!err){
            res.send('Actualizado')
        } else{
            res.send(err)
        }
})
})



// borrar usuario

router.post('/borrarusuario',(req, res) => {

    ModeloUsuario.findOneAndDelete({idusuario:req.body.idusuario}, (err) => {
        if(!err){
            res.send('Usuario borrado')
        } else{
            res.send(err)
        }
    })
    })