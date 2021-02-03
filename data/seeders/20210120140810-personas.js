'use strict';
let bcrypt = require('bcrypt')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Personas', [
      {
        cedula: '9999999999',
        apellidos: 'SIN ASIGNAR',
        nombres: 'SIN ASIGNAR',
        correo: 'sin@correo.com',
        idLugar: 17,
        rol: 'ninguno',
        seguro: bcrypt.hashSync('12345678', bcrypt.genSaltSync(10), null),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cedula: '1713121810',
        apellidos: 'ANDOCILLA',
        nombres: 'CARLOS',
        correo: 'albertandoca@gmail.com',
        idLugar: 17,
        rol: 'ADMINISTRADOR',
        seguro: bcrypt.hashSync('12345678', bcrypt.genSaltSync(10), null),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cedula: '0606060606',
        apellidos: 'GUEVARA LÓPEZ',
        nombres: 'ROSA LINDA',
        correo: 'chimborazo@up.com',
        idLugar: 33,
        rol: 'DATOS',
        seguro: bcrypt.hashSync('12345678', bcrypt.genSaltSync(10), null),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cedula: '0606060606',
        apellidos: 'GUEVARA LÓPEZ',
        nombres: 'ROSA LINDA',
        correo: 'azuay@up.com',
        idLugar: 28,
        rol: 'DATOS',
        seguro: bcrypt.hashSync('12345678', bcrypt.genSaltSync(10), null),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cedula: '0606060606',
        apellidos: 'GUEVARA LÓPEZ',
        nombres: 'ROSA LINDA',
        correo: 'bolivarr@up.com',
        idLugar: 29,
        rol: 'DATOS',
        seguro: bcrypt.hashSync('12345678', bcrypt.genSaltSync(10), null),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cedula: '0606060606',
        apellidos: 'GUEVARA LÓPEZ',
        nombres: 'ROSA LINDA',
        correo: 'cañar@up.com',
        idLugar: 30,
        rol: 'DATOS',
        seguro: bcrypt.hashSync('12345678', bcrypt.genSaltSync(10), null),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cedula: '0606060606',
        apellidos: 'GUEVARA LÓPEZ',
        nombres: 'ROSA LINDA',
        correo: 'carchi@up.com',
        idLugar: 31,
        rol: 'DATOS',
        seguro: bcrypt.hashSync('12345678', bcrypt.genSaltSync(10), null),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cedula: '0606060606',
        apellidos: 'GUEVARA LÓPEZ',
        nombres: 'ROSA LINDA',
        correo: 'cotopaxi@up.com',
        idLugar: 32,
        rol: 'DATOS',
        seguro: bcrypt.hashSync('12345678', bcrypt.genSaltSync(10), null),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cedula: '0606060606',
        apellidos: 'GUEVARA LÓPEZ',
        nombres: 'ROSA LINDA',
        correo: 'eloro@up.com',
        idLugar: 34,
        rol: 'DATOS',
        seguro: bcrypt.hashSync('12345678', bcrypt.genSaltSync(10), null),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cedula: '0606060606',
        apellidos: 'GUEVARA LÓPEZ',
        nombres: 'ROSA LINDA',
        correo: 'esmeraldas@up.com',
        idLugar: 35,
        rol: 'DATOS',
        seguro: bcrypt.hashSync('12345678', bcrypt.genSaltSync(10), null),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cedula: '0606060606',
        apellidos: 'GUEVARA LÓPEZ',
        nombres: 'ROSA LINDA',
        correo: 'guayas1@up.com',
        idLugar: 36,
        rol: 'DATOS',
        seguro: bcrypt.hashSync('12345678', bcrypt.genSaltSync(10), null),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cedula: '0606060606',
        apellidos: 'GUEVARA LÓPEZ',
        nombres: 'ROSA LINDA',
        correo: 'guayas2@up.com',
        idLugar: 37,
        rol: 'DATOS',
        seguro: bcrypt.hashSync('12345678', bcrypt.genSaltSync(10), null),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cedula: '0606060606',
        apellidos: 'GUEVARA LÓPEZ',
        nombres: 'ROSA LINDA',
        correo: 'guayas3@up.com',
        idLugar: 38,
        rol: 'DATOS',
        seguro: bcrypt.hashSync('12345678', bcrypt.genSaltSync(10), null),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cedula: '0606060606',
        apellidos: 'GUEVARA LÓPEZ',
        nombres: 'ROSA LINDA',
        correo: 'guayas4@up.com',
        idLugar: 39,
        rol: 'DATOS',
        seguro: bcrypt.hashSync('12345678', bcrypt.genSaltSync(10), null),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cedula: '0606060606',
        apellidos: 'GUEVARA LÓPEZ',
        nombres: 'ROSA LINDA',
        correo: 'imbabura@up.com',
        idLugar: 40,
        rol: 'DATOS',
        seguro: bcrypt.hashSync('12345678', bcrypt.genSaltSync(10), null),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cedula: '0606060606',
        apellidos: 'GUEVARA LÓPEZ',
        nombres: 'ROSA LINDA',
        correo: 'loja@up.com',
        idLugar: 41,
        rol: 'DATOS',
        seguro: bcrypt.hashSync('12345678', bcrypt.genSaltSync(10), null),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cedula: '0606060606',
        apellidos: 'GUEVARA LÓPEZ',
        nombres: 'ROSA LINDA',
        correo: 'losrios@up.com',
        idLugar: 42,
        rol: 'DATOS',
        seguro: bcrypt.hashSync('12345678', bcrypt.genSaltSync(10), null),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cedula: '0606060606',
        apellidos: 'GUEVARA LÓPEZ',
        nombres: 'ROSA LINDA',
        correo: 'manabi1@up.com',
        idLugar: 43,
        rol: 'DATOS',
        seguro: bcrypt.hashSync('12345678', bcrypt.genSaltSync(10), null),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cedula: '0606060606',
        apellidos: 'GUEVARA LÓPEZ',
        nombres: 'ROSA LINDA',
        correo: 'manabi2@up.com',
        idLugar: 44,
        rol: 'DATOS',
        seguro: bcrypt.hashSync('12345678', bcrypt.genSaltSync(10), null),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cedula: '0606060606',
        apellidos: 'GUEVARA LÓPEZ',
        nombres: 'ROSA LINDA',
        correo: 'morona@up.com',
        idLugar: 45,
        rol: 'DATOS',
        seguro: bcrypt.hashSync('12345678', bcrypt.genSaltSync(10), null),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cedula: '0606060606',
        apellidos: 'GUEVARA LÓPEZ',
        nombres: 'ROSA LINDA',
        correo: 'napo@up.com',
        idLugar: 46,
        rol: 'DATOS',
        seguro: bcrypt.hashSync('12345678', bcrypt.genSaltSync(10), null),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cedula: '0606060606',
        apellidos: 'GUEVARA LÓPEZ',
        nombres: 'ROSA LINDA',
        correo: 'pastaza@up.com',
        idLugar: 47,
        rol: 'DATOS',
        seguro: bcrypt.hashSync('12345678', bcrypt.genSaltSync(10), null),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cedula: '0606060606',
        apellidos: 'GUEVARA LÓPEZ',
        nombres: 'ROSA LINDA',
        correo: 'pichincha1@up.com',
        idLugar: 48,
        rol: 'DATOS',
        seguro: bcrypt.hashSync('12345678', bcrypt.genSaltSync(10), null),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cedula: '0606060606',
        apellidos: 'GUEVARA LÓPEZ',
        nombres: 'ROSA LINDA',
        correo: 'pichincha2@up.com',
        idLugar: 49,
        rol: 'DATOS',
        seguro: bcrypt.hashSync('12345678', bcrypt.genSaltSync(10), null),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cedula: '0606060606',
        apellidos: 'GUEVARA LÓPEZ',
        nombres: 'ROSA LINDA',
        correo: 'pichincha3@up.com',
        idLugar: 50,
        rol: 'DATOS',
        seguro: bcrypt.hashSync('12345678', bcrypt.genSaltSync(10), null),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cedula: '0606060606',
        apellidos: 'GUEVARA LÓPEZ',
        nombres: 'ROSA LINDA',
        correo: 'pichincha4@up.com',
        idLugar: 51,
        rol: 'DATOS',
        seguro: bcrypt.hashSync('12345678', bcrypt.genSaltSync(10), null),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cedula: '0606060606',
        apellidos: 'GUEVARA LÓPEZ',
        nombres: 'ROSA LINDA',
        correo: 'tungurahua@up.com',
        idLugar: 52,
        rol: 'DATOS',
        seguro: bcrypt.hashSync('12345678', bcrypt.genSaltSync(10), null),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cedula: '0606060606',
        apellidos: 'GUEVARA LÓPEZ',
        nombres: 'ROSA LINDA',
        correo: 'zamora@up.com',
        idLugar: 53,
        rol: 'DATOS',
        seguro: bcrypt.hashSync('12345678', bcrypt.genSaltSync(10), null),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cedula: '0606060606',
        apellidos: 'GUEVARA LÓPEZ',
        nombres: 'ROSA LINDA',
        correo: 'galapagos@up.com',
        idLugar: 54,
        rol: 'DATOS',
        seguro: bcrypt.hashSync('12345678', bcrypt.genSaltSync(10), null),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cedula: '0606060606',
        apellidos: 'GUEVARA LÓPEZ',
        nombres: 'ROSA LINDA',
        correo: 'sucumbios@up.com',
        idLugar: 55,
        rol: 'DATOS',
        seguro: bcrypt.hashSync('12345678', bcrypt.genSaltSync(10), null),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cedula: '0606060606',
        apellidos: 'GUEVARA LÓPEZ',
        nombres: 'ROSA LINDA',
        correo: 'orellana@up.com',
        idLugar: 56,
        rol: 'DATOS',
        seguro: bcrypt.hashSync('12345678', bcrypt.genSaltSync(10), null),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cedula: '0606060606',
        apellidos: 'GUEVARA LÓPEZ',
        nombres: 'ROSA LINDA',
        correo: 'santodomingo@up.com',
        idLugar: 57,
        rol: 'DATOS',
        seguro: bcrypt.hashSync('12345678', bcrypt.genSaltSync(10), null),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cedula: '0606060606',
        apellidos: 'GUEVARA LÓPEZ',
        nombres: 'ROSA LINDA',
        correo: 'santaelena@up.com',
        idLugar: 58,
        rol: 'DATOS',
        seguro: bcrypt.hashSync('12345678', bcrypt.genSaltSync(10), null),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cedula: '0606060606',
        apellidos: 'GUEVARA LÓPEZ',
        nombres: 'ROSA LINDA',
        correo: 'europa@up.com',
        idLugar: 59,
        rol: 'DATOS',
        seguro: bcrypt.hashSync('12345678', bcrypt.genSaltSync(10), null),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cedula: '0606060606',
        apellidos: 'GUEVARA LÓPEZ',
        nombres: 'ROSA LINDA',
        correo: 'eeuu@up.com',
        idLugar: 60,
        rol: 'DATOS',
        seguro: bcrypt.hashSync('12345678', bcrypt.genSaltSync(10), null),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cedula: '0606060606',
        apellidos: 'GUEVARA LÓPEZ',
        nombres: 'ROSA LINDA',
        correo: 'america@up.com',
        idLugar: 61,
        rol: 'DATOS',
        seguro: bcrypt.hashSync('12345678', bcrypt.genSaltSync(10), null),
        createdAt: new Date(),
        updatedAt: new Date()
      }

  ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Personas', null, {});
  }
};
