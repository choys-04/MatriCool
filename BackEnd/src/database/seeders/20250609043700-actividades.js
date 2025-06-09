'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('actividades', [{
      name: 'dia del padre',
      descripcion: "cafe con papas",
      fechaInicio: "2024-8-15",
      fechaFinal: "2024-9-15"
    }, {
      name: 'dia de la madre',
      descripcion: "cafe con papas",
      fechaInicio: "2024-6-17",
      fechaFinal: "2024-7-17"
    }], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
