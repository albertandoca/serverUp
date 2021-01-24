'use strict';

const express = require('express')

let api = express.Router(),
    muestraControl = require('../controles/muestra')

api.get('/muestra', muestraControl.asignarMuestra)
api.get('/partidomesa/:inicio/:fin', muestraControl.crearPartidoMesa)
api.get('/actualizapartidomesa', muestraControl.actualizaPartidoMesa)
api.get('/leerpresidentes', muestraControl.leerpresidentes)

module.exports = api