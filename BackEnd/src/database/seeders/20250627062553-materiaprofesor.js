'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('materiaProfesores', [
        {
          materiaId: '1',
          profesorId: '4'
        },{
          materiaId: '2',
          profesorId: '1'
        },{
          materiaId: '3',
          profesorId: '2'
        },{
          materiaId: '4',
          profesorId: '1'
        }
    ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('materiaProfesores', null, {});
  }
};
