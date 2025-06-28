'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
await queryInterface.bulkInsert('seccionAlumnos', [{
        seccionId: '1',
        alumnoId: '1'
      },{
        seccionId: '2',
        alumnoId: '2'
      },{
        seccionId: '3',
        alumnoId: '3'
      },{
        seccionId: '4',
        alumnoId: '4'
      }], {});
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('seccionAlumnos', null, {});
  }
};
