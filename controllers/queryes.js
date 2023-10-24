const express = require('express')
const empleados  =require("../models/employee")
const mensaje = require('../models/smtp');

const sendPrueba = (req, res)=>{
    mensaje.prueba().then(()=>{
        return res.status(200).send("Prueba lista")
    })
}

const sendEmail = (req,res)=>{
    const data = req.body
    mensaje.sendMail(data.from, data.to, data.subjet, data.html).then(()=>{
        return res.status(200).send("Se completo el proceso");
    })
}

const getAllEmpleados = (req,res,next)=>{
    empleados.obtenerTodosLosEmpleados().then(empleados=>{
        return res.status(200).send("hola");
    })
}

const getEmpleado =(req,res)=>{
    empleados.obtenerEmpleado(req.params.id).then((empleado)=>{
        return res.status(200).send(empleado)
    })
}

const deletEmpleado = (req, res)=>{
    empleados.borrarEmpleado(req.params.id).then(()=>{
        return res.status(200).send("Se borro con nexito")
    })
}

const putEmpleado = (req,res)=>{
    const data = req.body;
    empleados.updateEmpleado(data.id,data.nombre,data.nickname,data.correo,data.rol,data.departamento).then(()=>{
        return res.status(200).send("La informacion se ha actuaizdo correctamente")
    })
}

const postEmpleado = (req,res)=>{
    const data = req.body;
    empleados.updateEmpleado(data.nombre,data.nickname,data.correo,data.rol,data.departamento).then(()=>{
        return res.status(200).send("La informacion se ha actuaizdo correctamente")
    })
}

module.exports = {
    getAllEmpleados,
    getEmpleado,
    deletEmpleado,
    putEmpleado,
    postEmpleado
}