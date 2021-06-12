'use strict'

const mongoose = require('mongoose')
const app = require('./app')
const config = require('./config')

// Inicializar la base de datos 
mongoose.set('useNewUrlParser', true)
mongoose.set('useUnifiedTopology', true)
mongoose.set('useFindAndModify', false)

// base de datos
mongoose.connect(config.db, (err, res) => {
    if (err) {
        return console.log(`Error al conectar a la base de datos: ${err}`)
    }
    console.log('Conexion a la base de datos establecida...')

    app.listen(config.port, () => {
        console.log(`API REST ejecutando en http://localhost:${config.port}`)
    })
})