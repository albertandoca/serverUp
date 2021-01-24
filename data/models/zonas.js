'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Zonas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Zonas.init({
    idLugar: DataTypes.INTEGER,
    electores: DataTypes.INTEGER,
    electoresF: DataTypes.INTEGER,
    electoresM: DataTypes.INTEGER,
    electoresJ: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Zonas',
  });
  return Zonas;
};