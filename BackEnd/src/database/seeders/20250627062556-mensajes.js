"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Mensajes",
      [
        {
          asunto: 'Acto de indiciplina',
          mensaje: 'El dia de ayer, se genero un altercado.',
          emisorId: '1',
          receptorId: '2',
          leido: false,
          fechaEnvio: '2025/02/02',
        },{
          asunto: 'No presento tarea',
          mensaje: 'El dia de ayer, se genero un altercado.',
          emisorId: '2',
          receptorId: '3',
          leido: false,
          fechaEnvio: '2025/02/03',
        },{
          asunto: 'Ausencia toda la tarde',
          mensaje: 'El dia de ayer, se genero un altercado.',
          emisorId: '3',
          receptorId: '4',
          leido: false,
          fechaEnvio: '2025/02/04',
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Mensajes", null, {});
  },
};
