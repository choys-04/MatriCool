"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Secciones",
      [
        {
          name: "7-1",
          profesorId: "1",
        },
        {
          name: "8-1",
          profesorId: "3",
        },
        {
          name: "9-1",
          profesorId: "2",
        },
        {
          name: "10-1",
          profesorId: "4",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Secciones", null, {});
  },
};
