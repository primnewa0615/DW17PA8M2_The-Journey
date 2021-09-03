'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Jawabans', {
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
      tesId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references : {
        model : 'Peserta',
        key : 'id'
        }
      },
      nomor: {
        type: Sequelize.INTEGER
      },
      jawaban: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Jawabans');
  }
};