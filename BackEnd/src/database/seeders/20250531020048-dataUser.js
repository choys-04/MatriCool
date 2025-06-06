'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('dataUsers', [{
        firstName: 'Isaac',
        lastName: 'Flores',
        address: 'Calle sin salida #2',
        telefono: '78945612',
        userId: 1,
      }], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('dataUsers', null, {});
  }
};
