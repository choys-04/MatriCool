"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "encargadoAlumnos",
      [
        {
          alumnoId: "1",
          encargadoId: "3",
        },
        {
          alumnoId: "3",
          encargadoId: "2",
        },
        {
          alumnoId: "2",
          encargadoId: "4",
        },
        {
          alumnoId: "4",
          encargadoId: "1",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("encargadoAlumnos", null, {});
  },
};
