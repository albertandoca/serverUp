'use strict';

let jwt = require('jsonwebtoken');

let autenticoApp = (req, res, next) => {
    let tk = req.body.frase 
    let seguro = req.body.seguro
    let semilla = `${seguro}awsd${process.env.KEY_JWT}`

    if(tk) {
        jwt.verify(tk, semilla, (err, decoded) => {
            if (err) {
                return res.status(200).json({
                    data: {token: false},
                    msg: 'no Ok'
                })
            } else {
                next()
            }
        })
    } else {
        return res.status(200).json({
            data: {token: false},
            msg: 'no Ok'
        })
    }
}

module.exports = {
    autenticoApp
}