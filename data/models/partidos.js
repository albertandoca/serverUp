'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Partidos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Partidos.init({
    detalle: DataTypes.STRING,
    lista: DataTypes.STRING,
    urlLogo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Partidos',
  });
  return Partidos;
};