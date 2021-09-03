'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Peserta', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      kode: {
        type: Sequelize.STRING(50)
      },
      clientId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references : {
          model : 'Clients',
          key : 'id'
        }
      },
      projectId: {
        type: Sequelize.INTEGER,
        allowNull:true,
        references : {
        model : 'Projects',
        key : 'id'
        }
      },
      entryDate: {
        type: Sequelize.DATE
      },
      testDate: {
        type: Sequelize.DATE
      },
      expiryDate: {
        type: Sequelize.DATE
      },
      status: {
        type: Sequelize.BOOLEAN(3)
      },
      login: {
        type: Sequelize.BOOLEAN(3)
      },
      tglLahir: {
        type: Sequelize.DATEONLY
      },
      tmptLahir: {
        type: Sequelize.STRING
      },
      alamat: {
        type: Sequelize.STRING
      },
      telp: {
        type: Sequelize.STRING(15)
      },
      agama: {
        type: Sequelize.STRING(15)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Peserta');
  }
};