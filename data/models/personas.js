'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Personas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Personas.init({
    cedula: DataTypes.STRING,
    apellidoPaterno: DataTypes.STRING,
    apellidoMaterno: DataTypes.STRING,
    primerNombre: DataTypes.STRING,
    segundoNombre: DataTypes.STRING,
    correo: DataTypes.STRING,
    idLugar: DataTypes.INTEGER,
    rol: DataTypes.STRING,
    seguro: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Personas',
  });
  return Personas;
};