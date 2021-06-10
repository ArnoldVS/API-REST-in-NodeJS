'use strict'
//sintaxis javascript 6

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
    // correr el servidor
const app = express()
const port = process.env.PORT || 3003

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/api/product', (req, res) => {
    res.send(200, { products: [] })
})

app.get('/api/product/:productId', (req, res) => {

})

app.post('/api/product', (req, res) => {
    console.log(req.body)
    res.status(200).send({ message: 'El producto fue agregado' })
})

app.put('/api/product/:productId', (req, res) => {

})

app.delete('/api/proyect/:proyecId', (req, res) => {

})

mongoose.connect('mongodb://localhost:27017/shop', (err, res) => {
    if (err) {
        return console.log(`Error al conectar a la base de datos: ${err}`)
    }
    console.log('Conexion a la base de datos establecida...')

    app.listen(port, () => {
        console.log(`API REST ejecutando en http://localhost:${port}`)
    })
})