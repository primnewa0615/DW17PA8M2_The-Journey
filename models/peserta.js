'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Peserta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Peserta.init({
    kode: DataTypes.STRING,
    clientId: DataTypes.INTEGER,
    projectId: DataTypes.INTEGER,
    entryDate: DataTypes.DATE,
    testDate: DataTypes.DATE,
    expiryDate: DataTypes.DATE,
    status: DataTypes.BOOLEAN,
    login: DataTypes.BOOLEAN,
    tglLahir: DataTypes.DATEONLY,
    tmptLahir: DataTypes.STRING,
    alamat: DataTypes.STRING,
    telp: DataTypes.STRING,
    agama: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Peserta',
  });
  return Peserta;
};