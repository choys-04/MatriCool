'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
await queryInterface.bulkInsert('seccionAlumnos', [{
        seccionId: '7-1',
        alumnoId: '1'
      },{
        seccionId: '8-1',
        alumnoId: '2'
      },{
        seccionId: '9-1',
        alumnoId: '3'
      },{
        seccionId: '10-1',
        alumnoId: '4'
      }], {});
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('seccionAlumnos', null, {});
  }
};
