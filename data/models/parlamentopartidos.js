'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ParlamentoPartidos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  ParlamentoPartidos.init({
    idPartido: DataTypes.INTEGER,
    idMesa: DataTypes.BIGINT,
    voto: DataTypes.INTEGER,
    idLugar: DataTypes.INTEGER,
    idIngreso: DataTypes.INTEGER,
    idModifica: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ParlamentoPartidos',
  });
  return ParlamentoPartidos;
};