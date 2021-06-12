'use strict'

const mongoose = require('mongoose')
const User = require('../models/user')
const service = require('../services')

function signUp() {
    const user = new User({
        email: req.body.email,
        displayName: req.body.displayName,
    })

    user.save((err) => {
        if (err) res.status(500).send({ message: `Error al crear el usuario: ${err}` })

        return res.status(200).send({ token: service.crearteToken(user) })
    })
}

function signIn() {

}

module.exports = {
    signUp,
    signIn
}