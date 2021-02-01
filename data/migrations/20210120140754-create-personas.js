'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Personas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cedula: {
        type: Sequelize.STRING
      },
      apellidos: {
        type: Sequelize.STRING
      },
      nombres: {
        type: Sequelize.STRING
      },
      correo: {
        type: Sequelize.STRING
      },
      idLugar: {
        type: Sequelize.INTEGER
      },
      rol: {
        type: Sequelize.STRING
      },
      seguro: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Personas');
  }
};