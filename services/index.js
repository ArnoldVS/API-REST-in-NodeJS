'use strict'

const jwt = require('jsonwebtoken')
const moment = require('moment')
const config = require('../config')

function crearteToken(user) {
    const payload = {
        sub: user._id,
        ait: moment().unix(),
        exp: moment().add(14, 'days').unix()
    }

    jwt.encoded(payload, config.SECRET_TOKEN)
}

module.exports = crearteToken