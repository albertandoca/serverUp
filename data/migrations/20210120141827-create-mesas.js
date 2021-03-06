'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Mesas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idLugar: {
        type: Sequelize.INTEGER
      },
      sexo: {
        type: Sequelize.STRING
      },
      numero: {
        type: Sequelize.INTEGER
      },
      idPersona: {
        type: Sequelize.INTEGER
      },
      electores: {
        type: Sequelize.INTEGER
      },
      ctrl: {
        type: Sequelize.BOOLEAN
      },
      presidente: {
        type: Sequelize.INTEGER
      },
      nacional: {
        type: Sequelize.INTEGER
      },
      provincial: {
        type: Sequelize.INTEGER
      },
      parlamento: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Mesas');
  }
};