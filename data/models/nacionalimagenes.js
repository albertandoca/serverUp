'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NacionalImagenes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  NacionalImagenes.init({
    idMesa: DataTypes.BIGINT,
    urlImg1: DataTypes.TEXT,
    urlImg2: DataTypes.TEXT,
    urlImg3: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'NacionalImagenes',
  });
  return NacionalImagenes;
};