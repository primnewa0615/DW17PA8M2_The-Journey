'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //hasmany peserta
      Project.hasMany(models.Peserta, {
        as : 'peserta',
        foreignKey : {
          name : 'projectId' 
        }
      })
      //bellongsto client
      Project.belongsTo(models.Client, {
        as : 'clientP',
        foreignKey : {
          name : 'clientId' 
        }
      })
    }
  };
  Project.init({
    clientId: DataTypes.INTEGER,
    nama: DataTypes.STRING,
    cam: DataTypes.STRING,
    modulId: DataTypes.INTEGER,
    tglMulai: DataTypes.DATE,
    tglSelesai: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Project',
  });
  return Project;
};