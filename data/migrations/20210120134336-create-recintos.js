'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Recintos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idLugar: {
        type: Sequelize.INTEGER
      },
      padre: {
        type: Sequelize.INTEGER
      },
      jfi: {
        type: Sequelize.INTEGER
      },
      jff: {
        type: Sequelize.INTEGER
      },
      jmi: {
        type: Sequelize.INTEGER
      },
      jmf: {
        type: Sequelize.INTEGER
      },
      electores: {
        type: Sequelize.INTEGER
      },
      control: {
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
    await queryInterface.dropTable('Recintos');
  }
};