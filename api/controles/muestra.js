'use strict';
const hpack = require('hpack')

let sequelize = require('sequelize'),
    modelos = require('../../data/models'),
    op = sequelize.Op,
    codec = new hpack()

let leerpresidentes = (req, res) => {
    console.time('leer')
    modelos.PresidentePartidos.findAll()
    .then(data => {
        let packed = codec.encode(data)
        console.log(packed)
        res.status(200).json({
            dato: packed
        })
        console.timeEnd('leer')
    }).catch(err =>{
        res.status(400).json({
            dat1: err
        })
        
    })
    
}

let asignarMuestra = async (req, res) => {
    const inicio = req.params.inicio
    const fin = req.params.fin
    let ope = 1
    while (ope <= 4377) {
        await modelos.Recintos.findOne({
            where: {
                id: ope
            }
        }).then(data => {
            let recinto = data
            let controlF = 0
            let controlM = 0
            if (recinto.control > 0) {
                if ((recinto.control % 2) === 0) {
                    controlF = recinto.control / 2
                    controlM = recinto.control / 2
                } else {
                    if (recinto.jff === recinto.jmf) {
                        const random = Math.round(Math.random())
                        if (random === 1) {
                            controlF = Math.ceil(recinto.control / 2)
                            controlM = Math.floor(recinto.control / 2)
                        } else {
                            controlM = Math.ceil(recinto.control / 2)
                            controlF = Math.floor(recinto.control / 2)
                        }
                    } else {
                        if (recinto.jff > recinto.jmf) {
                            controlF = Math.ceil(recinto.control / 2)
                            controlM = Math.floor(recinto.control / 2)
                        } else {
                            controlM = Math.ceil(recinto.control / 2)
                            controlF = Math.floor(recinto.control / 2)
                        }
                    }
                }
                if (recinto.jfi > 0 && recinto.jff >0) {
                    const randomF = crearRandom('F', recinto.idLugar, controlF, recinto.jff, recinto.jfi)
                }
                if (recinto.jmi > 0 && recinto.jmf >0) {
                    const randomM = crearRandom('M', recinto.idLugar, controlM, recinto.jmf, recinto.jmi)   
                }
                             
            }
            
        })
        ope++
    }
    res.status(200).json({
        msg: `ok procesados ${ ope }`
    })
    
}



let crearRandom = async (sexoMesa, lugar, control, jf, ji) => {
    let randomMesas = []
    let banderaRandom = false
    for (let i = 0; i < control; i++) {
        let bandera = false
        while (bandera === false) {
            let random = Math.floor(Math.random() * (jf - ji + 1)) + ji
            if (banderaRandom === false) {
                randomMesas.push(random)
                await modelos.Mesas.update({
                    control: true
                },
                {
                    where: {
                        idLugar: lugar,
                        sexo: sexoMesa,
                        numero: random
                    }
                })
                banderaRandom = true
                bandera = true
            } else {
                let banderaMesa = false
                randomMesas.forEach(mesa => {
                    if (mesa === random) {
                        banderaMesa = true
                    }
                })
                if (banderaMesa === false) {
                    randomMesas.push(random)
                    await modelos.Mesas.update({
                        control: true
                    },
                    {
                        where: {
                            idLugar: lugar,
                            sexo: sexoMesa,
                            numero: random
                        }
                    })
                    bandera = true
                }
            }
        }
    }
}


let crearPartidoMesa = async (req, res) => {
    let inicio = req.params.inicio
    let fin = req.params.fin
    let presidentes = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    let nacionales = [1,17,2,3,18,4,5,6,8,9,10,11,19,13,14,15,16]
    let parlamentarios = [1,17,2,3,18,4,6,8,9,10,11,19,13,15,16]
    let azuay = [1,2,3,18,4,6,20,21,10,11,19,13,14,15,16,22,23]
    console.log(inicio, fin)
    console.time('tiempo')
    let start = new Date()
    let op = 0
    for (let i = 24001; i <= 30000; i++) {
        console.log(i)
        for (let j = 0; j < presidentes.length; j++) {
            modelos.PresidentePartidos.create({
                idPartido: presidentes[j],
                idMesa: i,
                voto: 0,
                idIngreso: 2,
                idModifica: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            }).then(async data => {
                console.log(op++)
            }).catch(err => {
                console.log(err)
            })
        }
        
    }
    
    console.timeEnd('tiempo')
        let end = new Date()
        res.status(200).json({
        msg: (end-start)
    }) 
}

let actualizaPartidoMesa = (req, res) => {
    let presidentes = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    let nacionales = [1,17,2,3,18,4,5,6,8,9,10,11,19,13,14,15,16]
    let parlamentarios = [1,17,2,3,18,4,6,8,9,10,11,19,13,15,16]
    let azuay = [1,2,3,18,4,6,20,21,10,11,19,13,14,15,16,22,23]
    console.time('tiempo')
    let start = new Date()
    let op = 0
    for (let i = 1; i <= 100; i++) {
        for (let j = 0; j < presidentes.length; j++) {
            modelos.PresidentePartidos.update({
                voto: 220,
                idIngreso: 2,
                idModifica: 2,
            },
            {
                where: {
                    idPartido: j,
                    idMesa: i,
                }
            }
            ).then(data => {
                console.log(op++)
            })
        }
        
    }
    console.timeEnd('tiempo')
    let end = new Date()
    res.status(200).json({
        msg: (end-start)
    }) 

}


module.exports = {
    asignarMuestra,
    crearPartidoMesa,
    actualizaPartidoMesa,
    leerpresidentes
}
