'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class KpLaporan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      KpLaporan.belongsTo(models.Client,{
        as : 'kplaporan',
        foreignKey : {
          name : 'kopId' 
        }
      })
    }
  };
  KpLaporan.init({
    nama: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'KpLaporan',
  });
  return KpLaporan;
};