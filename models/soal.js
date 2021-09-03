'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Soal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Soal.init({
    tesId: DataTypes.INTEGER,
    nomor: DataTypes.INTEGER,
    soal: DataTypes.STRING,
    kunci: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Soal',
  });
  return Soal;
};