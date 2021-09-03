'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Credit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Credit.init({
    clientId: DataTypes.INTEGER,
    modulId: DataTypes.INTEGER,
    tglTopUp: DataTypes.DATE,
    total: DataTypes.INTEGER,
    terpakai: DataTypes.INTEGER,
    approve: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Credit',
  });
  return Credit;
};