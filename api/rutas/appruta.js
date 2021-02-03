'use strict';

const express = require('express')

let api = express.Router(),
    appControl = require('../controles/app'),
    jwtControl = require('../controles/jwtapp')


api.get('/prueba', appControl.prueba)
api.post('/login', appControl.login)
api.post('/mesas', [jwtControl.autenticoApp], appControl.mesas)
api.get('/getpersonas', appControl.getPersonas)
api.get('/getnacionalimg', appControl.getNacionalImagenes)
api.put('/uploaddatapresidente', [jwtControl.autenticoApp], appControl.uploadDataPresidente)
api.put('/uploaddataprovincial', [jwtControl.autenticoApp], appControl.uploadDataProvincial)
api.put('/uploaddatanacional', [jwtControl.autenticoApp], appControl.uploadDataNacional)
api.put('/uploaddataparlamento', [jwtControl.autenticoApp], appControl.uploadDataParlamento)
api.put('/uploadimgpresidente', [jwtControl.autenticoApp], appControl.uploadImgPresidente)
api.put('/uploadimgnacional', [jwtControl.autenticoApp], appControl.uploadImgNacional)
api.put('/uploadimgprovincial', [jwtControl.autenticoApp], appControl.uploadImgProvincial)
api.put('/uploadimgparlamento', [jwtControl.autenticoApp], appControl.uploadImgParlamento)





module.exports = api