'use strict';
const hpack = require('hpack')
let jwt = require('jsonwebtoken')
let bcrypt = require('bcrypt')

let sequelize = require('sequelize'),
    modelos = require('../../data/models'),
    op = sequelize.Op,
    codec = new hpack()

let prueba = (req, res) => {
    res.status(200).send('hola app')
}

let cambioSeguro = (req, res) => {
    let nuevo= bcrypt.hasSync(req.body.nuevo, bcrypt.genSaltSync(10), null)
    let cedula = req.body.cedula
    modelos.Personas.update({
        cedula: cedula,
        seguro: nuevo
    },
    {
        where: {
            cedula: cedula
        }
    }).then(res => {
        return res.status(200).json({
            data: [true],
            msg: 'ok'
        })
    }).catch(err => {
        return res.status(200).json({
            data: [false],
            msg: 'ok'
        })
    })
}

let login = (req, res) => {
    let usuario = req.body.data.usuario || null
    let seguro = req.body.data.seguro || null

    if (usuario && seguro ) {
        modelos.Personas.findOne({
            attributes: { 
                exclude: [
                    'createdAt',
                    'updatedAt'
                ] 
            },
            where: {
                cedula: usuario
            }
        }).then(data => {
            if (data) {
                let persona = data.toJSON()
                bcrypt.compare(seguro, persona.seguro, function(err, result) {
                    if(result) {
                        if (persona.rol === 'DATOS' || persona.rol === 'VERIFICA') {
                            delete persona.rol
                            delete persona.seguro
                            delete persona.correo 
                            
                            let semilla = `${persona.cedula}awsd${process.env.KEY_JWT}`
                            let frase = jwt.sign({data: persona }, semilla, {
                                algorithm: 'HS256'
                            })
                            persona.frase = frase
                            return res.status(200).json({
                                data: persona,
                                msg: 'ok'
                            });
                        } else {
                            return res.status(200).json({
                                data: {frase: false},
                                msg: 'no Ok1'
                            })
                        }
                    } else {
                        return res.status(200).json({
                            data: {frase: false},
                            msg: 'no Ok2'
                        })
                    }
                })
            } else {
                return res.status(200).json({
                    data: {frase: false},
                    msg: 'no Ok3'
                })
            } 
        }).catch(err => {
            return res.status(200).json({
                data: {frase: false},
                msg: 'no Ok4'
            })
        })
    } else {
        return res.status(200).json({
            data: {frase: false},
            msg: 'no Ok5'
        })
    }
}



let mesas = (req, res) => {
    let idPersona = req.body.data.idPersona
    
    modelos.Mesas.findAll({
        attributes: { 
            exclude: [
                'createdAt',
                'updatedAt'
            ] 
        },
        where: {
            idPersona: idPersona
        }
    }).then(mesas => {
        return res.status(200).json({
            data: mesas,
            msg: 'ok'
        })
    }).catch(err => {
        return res.status(200).json({
            data: {token: false},
            msg: 'no Ok'
        })
    })
}

let getPersonas = (req, res) => {
    modelos.Personas.findAll()
    .then(d => {
        return res.status(200).json({
            data: d,
            msg: 'ok'
        })
    })
}


let inconsistentePresidente = (req, res) => {
    console.log('dta inco', req.body)
    let idMesa = req.body.data.idMesa
    if(idMesa) {
        modelos.Mesas.update({
            presidente: 1
        },
        {
            where: {
                id: idMesa
            }
        }).then(mesa => {
            return res.status(200).json({
                data: [true],
                msg: 'ok'
            })
        }).catch(err => {
            console.log(err)
            return res.status(200).json({
                data: [false],
                msg: 'No ok'
            })
        })
    }
}

let inconsistenteNacional = (req, res) => {
    let idMesa = req.body.data.idMesa
    if(idMesa) {
        modelos.Mesas.update({
            nacional: 1
        },
        {
            where: {
                id: idMesa
            }
        }).then(mesa => {
            return res.status(200).json({
                data: [true],
                msg: 'ok'
            })
        })
    }
}

let inconsistenteProvincial = (req, res) => {
    let idMesa = req.body.data.idMesa
    if(idMesa) {
        modelos.Mesas.update({
            provincial: 1
        },
        {
            where: {
                id: idMesa
            }
        }).then(mesa => {
            return res.status(200).json({
                data: [true],
                msg: 'ok'
            })
        })
    }
}

let inconsistenteParlamento = (req, res) => {
    console.log(req.body)
    let idMesa = req.body.data.idMesa
    if(idMesa) {
        modelos.Mesas.update({
            parlamento: 1
        },
        {
            where: {
                id: idMesa
            }
        }).then(mesa => {
            return res.status(200).json({
                data: [true],
                msg: 'ok'
            })
        })
    }
}



let uploadDataPresidente = (req, res) => {
    let datas = req.body.data;
    datas.forEach(data => {
        let idPartido = data.idPartido
        let idMesa = data.idMesa
        let voto = data.voto
        let idLugar = data.idLugar
        let idIngreso = data.idIngreso
        let idModifica = data.idModifica

        if (idPartido && idMesa && voto && idIngreso && idModifica) {
            modelos.PresidentePartidos.findOne({
                where: {
                    idPartido: idPartido,
                    idMesa: idMesa
                }
            }).then(consulta => {
                if (!consulta) {
                    modelos.PresidentePartidos.create({
                        idPartido: idPartido,
                        idMesa: idMesa,
                        voto: voto,
                        idLugar: idLugar,
                        idIngreso: idIngreso,
                        idModifica: idModifica
                    }).then(respuesta => {
                        
                    })
                }
                
            })
        } 
    });

    return res.status(200).json({
        data: [true],
        msg: 'ok'
    })
}

let uploadDataNacional = (req, res) => {
    let datas = req.body.data;
    datas.forEach(data => {
        let idPartido = data.idPartido
        let idMesa = data.idMesa
        let voto = data.voto
        let idLugar = data.idMesa
        let idIngreso = data.idIngreso
        let idModifica = data.idModifica

        if (idPartido && idMesa && voto && idIngreso && idModifica) {
            modelos.NacionalPartidos.findOne({
                where: {
                    idPartido: idPartido,
                    idMesa: idMesa
                }
            }).then(consulta => {
                if (!consulta) {
                    modelos.NacionalPartidos.create({
                        idPartido: idPartido,
                        idMesa: idMesa,
                        voto: voto,
                        idLugar: idLugar,
                        idIngreso: idIngreso,
                        idModifica: idModifica
                    }).then(respuesta => {
                        
                    })
                }
                
            })
        } 
    });

    return res.status(200).json({
        data: [true],
        msg: 'ok'
    })
}

let uploadDataProvincial = (req, res) => {
    let datas = req.body.data;
    datas.forEach(data => {
        let idPartido = data.idPartido
        let idMesa = data.idMesa
        let voto = data.voto
        let idLugar = data.idLugar
        let idIngreso = data.idIngreso
        let idModifica = data.idModifica

        if (idPartido && idMesa && voto && idIngreso && idModifica) {
            modelos.ProvincialPartidos.findOne({
                where: {
                    idPartido: idPartido,
                    idMesa: idMesa
                }
            }).then(consulta => {
                if (!consulta) {
                    modelos.ProvincialPartidos.create({
                        idPartido: idPartido,
                        idMesa: idMesa,
                        voto: voto,
                        idLugar: idLugar,
                        idIngreso: idIngreso,
                        idModifica: idModifica
                    }).then(respuesta => {
                        
                    })
                }
                
            })
        } 
    });

    return res.status(200).json({
        data: [true],
        msg: 'ok'
    })
}

let uploadDataParlamento = (req, res) => {
    let datas = req.body.data;
    datas.forEach(data => {
        let idPartido = data.idPartido
        let idMesa = data.idMesa
        let voto = data.voto
        let idLugar = data.idLugar
        let idIngreso = data.idIngreso
        let idModifica = data.idModifica

        if (idPartido && idMesa && voto && idIngreso && idModifica) {
            modelos.ParlamentoPartidos.findOne({
                where: {
                    idPartido: idPartido,
                    idMesa: idMesa
                }
            }).then(consulta => {
                if (!consulta) {
                    modelos.ParlamentoPartidos.create({
                        idPartido: idPartido,
                        idMesa: idMesa,
                        voto: voto,
                        idLugar: idLugar,
                        idIngreso: idIngreso,
                        idModifica: idModifica
                    }).then(respuesta => {
                        
                    })
                }
                
            })
        } 
    });

    return res.status(200).json({
        data: [true],
        msg: 'ok'
    })
}

let uploadImgNacional = (req, res) => {
    let idMesa = req.body.data.idMesa
    let urlImg1 = req.body.data.urlImg1
    let urlImg2 = req.body.data.urlImg2
    let urlImg3 = req.body.data.urlImg3
    
    if (idMesa && urlImg1 && urlImg2 && urlImg3) {
        modelos.NacionalImagenes.findOne({
            where: {
                idMesa: idMesa
            }
        }).then(consulta => {
            if (!consulta) {
                modelos.NacionalImagenes.create({
                    idMesa: idMesa,
                    urlImg1: urlImg1,
                    urlImg2: urlImg2,
                    urlImg3: urlImg3
                }).then(respuesta => {
                    
                })
            }
            return res.status(200).json({
                data: ['true'],
                msg: 'ok'
            })
        }).catch(err => {
            return res.status(200).json({
                data: [false],
                msg: 'No ok'
            })
        })
    } else {
        return res.status(200).json({
            data: [false],
            msg: 'No ok'
        })
    }
}

let uploadImgProvincial = (req, res) => {
    let idMesa = req.body.data.idMesa
    let urlImg1 = req.body.data.urlImg1
    let urlImg2 = req.body.data.urlImg2
    let urlImg3 = req.body.data.urlImg3
    
    if (idMesa && urlImg1 && urlImg2 && urlImg3) {
        modelos.ProvincialImagenes.findOne({
            where: {
                idMesa: idMesa
            }
        }).then(consulta => {
            if (!consulta) {
                modelos.ProvincialImagenes.create({
                    idMesa: idMesa,
                    urlImg1: urlImg1,
                    urlImg2: urlImg2,
                    urlImg3: urlImg3
                }).then(respuesta => {
                    
                })
            }
            return res.status(200).json({
                data: ['true'],
                msg: 'ok'
            })
        }).catch(err => {
            return res.status(200).json({
                data: [false],
                msg: 'No ok'
            })
        })
    } else {
        return res.status(200).json({
            data: [false],
            msg: 'No ok'
        })
    }
}

let uploadImgPresidente = (req, res) => {
    let idMesa = req.body.data.idMesa
    let urlImg1 = req.body.data.urlImg1
    let urlImg2 = req.body.data.urlImg2
    let urlImg3 = req.body.data.urlImg3
    
    if (idMesa && urlImg1 && urlImg2 && urlImg3) {
        modelos.PresidenteImagenes.findOne({
            where: {
                idMesa: idMesa
            }
        }).then(consulta => {
            if (!consulta) {
                modelos.PresidenteImagenes.create({
                    idMesa: idMesa,
                    urlImg1: urlImg1,
                    urlImg2: urlImg2,
                    urlImg3: urlImg3
                }).then(respuesta => {
                    
                })
            }
            return res.status(200).json({
                data: ['true'],
                msg: 'ok'
            })
        }).catch(err => {
            return res.status(200).json({
                data: [false],
                msg: 'No ok'
            })
        })
    } else {
        return res.status(200).json({
            data: [false],
            msg: 'No ok'
        })
    }
}

let uploadImgParlamento = (req, res) => {
    let idMesa = req.body.data.idMesa

    if (idMesa) {
        /*modelos.Mesas.update({
            parlamento: 2
        },
        {
            where: {
                id: idMesa
            }
        }).then(respuesta => {
            return res.status(200).json({
                data: [true],
                msg: 'ok'
            })
        }).catch(err => {
            
        })*/
        return res.status(200).json({
            data: [false],
            msg: 'No ok'
        })
    } else {
        return res.status(200).json({
            data: [false],
            msg: 'No ok'
        })
    }
}



module.exports = {
    login,
    mesas,
    prueba,
    getPersonas,
    uploadDataPresidente,
    uploadDataNacional,
    uploadDataProvincial,
    uploadDataParlamento,
    uploadImgPresidente,
    uploadImgNacional,
    uploadImgProvincial,
    uploadImgParlamento,
    inconsistentePresidente,
    inconsistenteNacional,
    inconsistenteProvincial,
    inconsistenteParlamento,
    cambioSeguro
    
}
