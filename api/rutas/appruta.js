'use strict';

const express = require('express')

let api = express.Router(),
    appControl = require('../controles/app')


api.get('/prueba', appControl.prueba)
api.post('/login', appControl.login)
api.post('/mesas', appControl.mesas)
api.get('/getpersonas', appControl.getPersonas)



module.exports = api