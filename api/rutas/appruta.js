'use strict';

const express = require('express')

let api = express.Router(),
    appControl = require('../controles/app')


api.get('/prueba', appControl.prueba)
api.post('/login', appControl.login)
api.post('/mesas', appControl.mesas)
api.get('/getpersonas', appControl.getPersonas)
api.get('/getnacionalimg', appControl.getNacionalImagenes)
api.put('/uploaddatapresidente', appControl.uploadDataPresidente)
api.put('/uploaddataprovincial', appControl.uploadDataProvincial)
api.put('/uploaddatanacional', appControl.uploadDataNacional)
api.put('/uploaddataparlamento', appControl.uploadDataParlamento)
api.put('/uploadimgpresidente', appControl.uploadImgPresidente)
api.put('/uploadimgnacional', appControl.uploadImgNacional)
api.put('/uploadimgprovincial', appControl.uploadImgProvincial)
api.put('/uploadimgparlamento', appControl.uploadImgParlamento)





module.exports = api