'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Lugares extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Lugares.init({
    codigo: DataTypes.STRING,
    detalle: DataTypes.STRING,
    idLugar: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Lugares',
  });
  return Lugares;
};