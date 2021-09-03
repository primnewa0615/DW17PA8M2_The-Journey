'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Projects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      clientId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references : {
        model : 'Clients',
        key : 'id'
        }
      },
      nama: {
        type: Sequelize.STRING(30)
      },
      cam: {
        type: Sequelize.BOOLEAN
      },
      modulId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references : {
        model : 'Moduls',
        key : 'id'
        }
      },
      tglMulai: {
        type: Sequelize.DATE
      },
      tglSelesai: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('Projects');
  }
};