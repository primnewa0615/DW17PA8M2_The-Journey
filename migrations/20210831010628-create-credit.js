'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Credits', {
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
      modulId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references : {
        model : 'Moduls',
        key : 'id'
        }
      },
      tglTopUp: {
        type: Sequelize.DATE
      },
      total: {
        type: Sequelize.INTEGER
      },
      terpakai: {
        type: Sequelize.INTEGER
      },
      approve: {
        type: Sequelize.BOOLEAN(3)
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
    await queryInterface.dropTable('Credits');
  }
};