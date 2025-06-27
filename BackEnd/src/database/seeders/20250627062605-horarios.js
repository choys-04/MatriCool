"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Horarios",
      [
        {
          seccionId: "1",
          profesorId: "2",
          dia: "Lunes",
          inicio: "7:00",
          final: "9:00",
        },
        {
          seccionId: "2",
          profesorId: "3",
          dia: "Martes",
          inicio: "7:00",
          final: "9:00",
        },
        {
          seccionId: "3",
          profesorId: "4",
          dia: "Miercoles",
          inicio: "7:00",
          final: "9:00",
        },
        {
          seccionId: "2",
          profesorId: "3",
          dia: "Juevez",
          inicio: "7:00",
          final: "9:00",
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Horarios", null, {});
  },
};
