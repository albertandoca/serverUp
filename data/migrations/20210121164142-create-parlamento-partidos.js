'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ParlamentoPartidos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idPartido: {
        type: Sequelize.INTEGER
      },
      idMesa: {
        type: Sequelize.BIGINT
      },
      voto: {
        type: Sequelize.INTEGER
      },
      idlugar: {
        type: Sequelize.INTEGER
      },
      idIngreso: {
        type: Sequelize.INTEGER
      },
      idModifica: {
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
    await queryInterface.dropTable('ParlamentoPartidos');
  }
};