'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UrutanTes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  UrutanTes.init({
    modulId: DataTypes.INTEGER,
    tesId: DataTypes.INTEGER,
    urutan: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UrutanTes',
  });
  return UrutanTes;
};