'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Materias', [{
        name: 'Ciencias',
        description: 'Ciencias Naturales',
      },{
        name: 'Matematicas',
        description: 'Algebra',
      },{
        name: 'Quimica',
        description: 'Ciencias Naturales',
      },{
        name: 'Estudios Sociales',
        description: 'Historia',
      }], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Materias', null, {});
  }
};
