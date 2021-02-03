'use strict';
const hpack = require('hpack')

let sequelize = require('sequelize'),
    modelos = require('../../data/models'),
    op = sequelize.Op,
    codec = new hpack()

let prueba = (req, res) => {
    res.status(200).send('hola app')
}

let login = (req, res) => {
    console.log(req.body.usuario)
    let usuario = req.body.usuario
    let seguro = req.body.seguro
    console.log(usuario, seguro)

    if (usuario && seguro ) {
        console.log('1234');
        modelos.Personas.findOne({
            attributes: { 
                exclude: [
                    'correo',
                    'rol',
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
                if (seguro === persona.seguro) {
                    delete persona.seguro
                    return res.status(200).json({
                        data: persona,
                        msg: 'ok'
                    });
                } else {
                    return res.status(200).json({
                        data: {},
                        msg: 'Usuario o contraseña incorrectos 1'
                    })
                }
            } else {
                return res.status(200).json({
                    data: {},
                    msg: 'Usuario o contraseña incorrectos 2'
                })
            } 
        }).catch(err => {
            return res.status(200).json({
                data: {},
                msg: 'Servido ocupado, intentelo más tarde 3'
            })
        })
    }
}



let mesas = (req, res) => {
    console.log(req.body)
    let idPersona = req.body.idPersona
    modelos.Mesas.findAll({
        attributes: { 
            exclude: [
                'auditoria',
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
        console.log(err)
        return res.status(200).json({
            data: {},
            msg: 'Servido ocupado, intentelo más tarde'
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

let uploadDataPresidente = (req, res) => {
    let datas = req.body.data;
    datas.forEach(data => {
        let idPartido = data.idPartido
        let idMesa = data.idMesa
        let voto = data.voto
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
                        idIngreso: idIngreso,
                        idModifica: idModifica
                    }).then(respuesta => {
                        modelos.Mesas.update({
                            presidente: 1
                        },
                        {
                            where: {
                                id: idMesa
                            }
                        })
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
                        idIngreso: idIngreso,
                        idModifica: idModifica
                    }).then(respuesta => {
                        modelos.Mesas.update({
                            nacional: 1
                        },
                        {
                            where: {
                                id: idMesa
                            }
                        })
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
                        idIngreso: idIngreso,
                        idModifica: idModifica
                    }).then(respuesta => {
                        modelos.Mesas.update({
                            provincial: 1
                        },
                        {
                            where: {
                                id: idMesa
                            }
                        })
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
                        idIngreso: idIngreso,
                        idModifica: idModifica
                    }).then(respuesta => {
                        modelos.Mesas.update({
                            parlamento: 1
                        },
                        {
                            where: {
                                id: idMesa
                            }
                        })
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
                    modelos.Mesas.update({
                        nacional: 2
                    },
                    {
                        where: {
                            id: idMesa
                        }
                    })
                })
            }
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
                    modelos.Mesas.update({
                        provincial: 2
                    },
                    {
                        where: {
                            id: idMesa
                        }
                    })
                })
            }
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
    } else {
        return res.status(200).json({
            data: [false],
            msg: 'No ok'
        })
    }
}

let uploadImgPresidente = (req, res) => {
    let idMesa = req.body.data.idMesa

    if (idMesa) {
        modelos.Mesas.update({
            presidente: 2
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
            console.log(err)
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
        modelos.Mesas.update({
            presidente: 2
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
            console.log(err)
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

let getNacionalImagenes = (req, res) => {
    modelos.NacionalImagenes.findAll().then(respuesta => {
        console.log(respuesta)
        return res.status(200).json({
            data: respuesta
        })
    }).catch(err => {
        console.log(err)
    })
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
    getNacionalImagenes
}
