'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Mesas', 
    [
      {
        idLugar: 5259,
        sexo: 'F',
        numero: 1,
        idPersona: 3,
        electores: 350,
        ctrl: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idLugar: 5259,
        sexo: 'F',
        numero: 2,
        idPersona: 3,
        electores: 350,
        ctrl: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idLugar: 5259,
        sexo: 'F',
        numero: 3,
        idPersona: 3,
        electores: 350,
        ctrl: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idLugar: 5259,
        sexo: 'F',
        numero: 24,
        idPersona: 3,
        electores: 350,
        ctrl: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idLugar: 5259,
        sexo: 'F',
        numero: 5,
        idPersona: 3,
        electores: 350,
        ctrl: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idLugar: 5259,
        sexo: 'F',
        numero: 6,
        idPersona: 3,
        electores: 350,
        ctrl: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idLugar: 5259,
        sexo: 'M',
        numero: 1,
        idPersona: 3,
        electores: 350,
        ctrl: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idLugar: 5259,
        sexo: 'M',
        numero: 2,
        idPersona: 3,
        electores: 350,
        ctrl: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idLugar: 5259,
        sexo: 'M',
        numero: 3,
        idPersona: 3,
        electores: 350,
        ctrl: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idLugar: 5259,
        sexo: 'M',
        numero: 4,
        idPersona: 3,
        electores: 350,
        ctrl: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idLugar: 5259,
        sexo: 'M',
        numero: 5,
        idPersona: 3,
        electores: 350,
        ctrl: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idLugar: 5259,
        sexo: 'M',
        numero: 6,
        idPersona: 3,
        electores: 350,
        ctrl: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }      
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Mesas', null, {});
  }
};
