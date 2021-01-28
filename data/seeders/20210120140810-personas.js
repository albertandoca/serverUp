'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Personas', [
      {
        cedula: '9999999999',
        apellidoPaterno: 'SIN ASIGNAR',
        apellidoMaterno: 'SIN ASIGNAR',
        primerNombre: 'SIN ASIGNAR',
        segundoNombre: 'SIN ASIGNAR',
        correo: 'sin@correo.com',
        idLugar: 17,
        rol: 'ninguno',
        seguro: '123456789',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cedula: '1713121810',
        apellidoPaterno: 'ANDOCILLA',
        apellidoMaterno: 'ANDRADE',
        primerNombre: 'CARLOS',
        segundoNombre: 'ALBERTO',
        correo: 'albertandoca@gmail.com',
        idLugar: 17,
        rol: 'ADMINISTRADOR',
        seguro: '123456789',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cedula: '0606060606',
        apellidoPaterno: 'GUEVARA',
        apellidoMaterno: 'LÓPEZ',
        primerNombre: 'ROSA',
        segundoNombre: 'LINDA',
        correo: 'rosalinda@gmail.com',
        idLugar: 6,
        rol: 'DATOS',
        seguro: '12345678',
        createdAt: new Date(),
        updatedAt: new Date()
      }

  ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Personas', null, {});
  }
};
