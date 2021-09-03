'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Progresses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      pesertaId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references : {
        model : 'Peserta',
        key : 'id'
        }
      },
      urutan: {
        type: Sequelize.INTEGER(10)
      },
      status: {
        type: Sequelize.BOOLEAN(3)
      },
      waktu: {
        type: Sequelize.TIME
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
    await queryInterface.dropTable('Progresses');
  }
};