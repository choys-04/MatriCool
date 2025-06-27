"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Notas",
      [
        {
          alumnoId: '1',
          materiaId: '1',
          usuarioId: '1',
          nota: '85',
        },{
          alumnoId: '2',
          materiaId: '2',
          usuarioId: '2',
          nota: '80',
        },{
          alumnoId: '3',
          materiaId: '3',
          usuarioId: '3',
          nota: '90',
        },{
          alumnoId: '4',
          materiaId: '4',
          usuarioId: '4',
          nota: '75',
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Notas", null, {});
  },
};
