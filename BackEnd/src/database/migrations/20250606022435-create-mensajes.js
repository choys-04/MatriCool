'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Mensajes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      asunto: {
        type: Sequelize.STRING
      },
      mensaje: {
        type: Sequelize.TEXT
      },
      emisorId: {
        type: Sequelize.INTEGER
      },
      receptorId: {
        type: Sequelize.INTEGER
      },
      leido: {
        type: Sequelize.BOOLEAN
      },
      fechaEnvio: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Mensajes');
  }
};