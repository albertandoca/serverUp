'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Zonas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idLugar: {
        type: Sequelize.INTEGER
      },
      electores: {
        type: Sequelize.INTEGER
      },
      electoresF: {
        type: Sequelize.INTEGER
      },
      electoresM: {
        type: Sequelize.INTEGER
      },
      electoresJ: {
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
    await queryInterface.dropTable('Zonas');
  }
};