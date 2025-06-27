"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Asistencias",
      [
        {
          alumnoId: '1',
          profesorId: '1',
          materiaId: '1',
        },{
          alumnoId: '2',
          profesorId: '2',
          materiaId: '2',
        },{
          alumnoId: '3',
          profesorId: '3',
          materiaId: '3',
        },{
          alumnoId: '4',
          profesorId: '4',
          materiaId: '4',
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Asistencias", null, {});
  },
};
