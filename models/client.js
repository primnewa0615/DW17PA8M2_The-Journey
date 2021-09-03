'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Client extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //belongs to user
      Client.belongsTo(models.User,{
        as : 'user',
        foreignKey : {
          name : 'userId' 
        }
      })

      //belongsto kop laporan
      Client.belongsTo(models.KpLaporan, {
        as : 'kplaporan',
        foreignKey : {
          name : 'kopId' 
        }
      })

      //hasmany project
      Client.hasMany(models.Project,{
        as : 'clientP',
        foreignKey : {
          name : 'clientId' 
        }
      })

      //hasmany peserta
      Client.hasMany(models.Peserta,{
        as : 'clientPs',
        foreignKey : {
          name : 'clientId' 
        }
      })
      //hasmany credit
      Client.hasMany(models.Credit,{
        as : 'clientC',
        foreignKey : {
          name : 'clientId' 
        }
      })
      //hasmany harga modul
      Client.hasMany(models.hargaModul,{
        as : 'clientH',
        foreignKey : {
          name : 'clientId' 
        }
      })
    }
  };
  Client.init({
    tipe: DataTypes.STRING,
    nama: DataTypes.STRING,
    email: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN,
    kopId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Client',
  });
  return Client;
};