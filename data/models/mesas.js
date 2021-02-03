'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mesas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Mesas.init({
    idLugar: DataTypes.INTEGER,
    sexo: DataTypes.STRING,
    numero: DataTypes.INTEGER,
    idPersona: DataTypes.INTEGER,
    electores: DataTypes.INTEGER,
    ctrl: DataTypes.BOOLEAN,
    presidente: DataTypes.INTEGER,
    nacional: DataTypes.INTEGER,
    provincial: DataTypes.INTEGER,
    parlamento: DataTypes.INTEGER   
  }, {
    sequelize,
    modelName: 'Mesas',
  });
  return Mesas;
};