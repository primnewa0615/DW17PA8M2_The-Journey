'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('UrutanTes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      modulId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references : {
        model : 'Moduls',
        key : 'id'
        }
      },
      tesId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references : {
        model : 'Tes',
        key : 'id'
        }
      },
      urutan: {
        type: Sequelize.INTEGER(3)
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
    await queryInterface.dropTable('UrutanTes');
  }
};