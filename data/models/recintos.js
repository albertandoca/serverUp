'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recintos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Recintos.init({
    idLugar: DataTypes.INTEGER,
    padre: DataTypes.INTEGER,
    jfi: DataTypes.INTEGER,
    jff: DataTypes.INTEGER,
    jmi: DataTypes.INTEGER,
    jmf: DataTypes.INTEGER,
    electores: DataTypes.INTEGER,
    control: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Recintos',
  });
  return Recintos;
};