"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "seccionProfesores",
      [
        {
          seccionId: "1",
          profesorId: "2",
        },
        {
          seccionId: "2",
          profesorId: "4",
        },
        {
          seccionId: "4",
          profesorId: "3",
        },
        {
          seccionId: "3",
          profesorId: "1",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("seccionProfesores", null, {});
  },
};
