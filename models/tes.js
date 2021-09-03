'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Tes.init({
    nama: DataTypes.STRING,
    kategori: DataTypes.ENUM('pg', 'essay', 'kraepelin', 'checkboxs', 'others'),
    waktu: DataTypes.TIME
  }, {
    sequelize,
    modelName: 'Tes',
  });
  return Tes;
};