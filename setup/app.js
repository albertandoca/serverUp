'use strict';

const express = require('express'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      compression = require('compression')

let app = express(),
    modelos = require('../data/models'),
    muestra = require('../api/rutas/muestra'),
    appRuta = require('../api/rutas/appruta'),
    corsOptions = {
        origin: 'http://192.168.1.61:3000',
        optionsSuccessStatus: 200
    }

app.use(bodyParser.urlencoded({limit: '1mb', extended: true}))
app.use(bodyParser.json({limit: '1mb', extended: true}))
app.use(cors())
app.use(compression())

modelos.sequelize.sync()
.then(() => {
    console.log('DB in line...')
}).catch(err => {
    console.log(err)
})    

/*app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});*/

app.use('/server', muestra)

app.use('/app', appRuta)

module.exports = app