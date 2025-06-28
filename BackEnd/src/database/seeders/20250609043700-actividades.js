'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Actividades', [{
      name: 'dia del padre',
      descripcion: "cafe con papas",
      fechaInicio: "2024-8-15",
      fechaFinal: "2024-9-15"
    }, {
      name: 'dia de la madre',
      descripcion: "cafe con mamas",
      fechaInicio: "2024-6-17",
      fechaFinal: "2024-7-17"
    }], {});
  },

  async down(queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Actividades', null, {});
  }
};
