'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Jawaban extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Jawaban.init({
    pesertaId: DataTypes.INTEGER,
    tesId: DataTypes.INTEGER,
    nomor: DataTypes.INTEGER,
    jawaban: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Jawaban',
  });
  return Jawaban;
};