'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Materia', [{
        name: 'Ciencias',
        descripcion: 'Ciencias Naturales',
      },{
        name: 'Matematicas',
        descripcion: 'Algebra',
      },{
        name: 'Quimica',
        descripcion: 'Ciencias Naturales',
      },{
        name: 'Estudios Sociales',
        descripcion: 'Historia',
      }], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Materia', null, {});
  }
};
