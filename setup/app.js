'use strict';

const express = require('express'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      compression = require('compression')

let app = express(),
    modelos = require('../data/models'),
    muestra = require('../api/rutas/muestra')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())
app.use(compression())

modelos.sequelize.sync()
.then(() => {
    console.log('DB in line...')
}).catch(err => {
    console.log(err)
})    

app.use('/server', muestra)
module.exports = app