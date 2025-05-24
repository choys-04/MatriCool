'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Users', [
      {
        userName: 'Isaac',
        password: '123',
        typeUser: 'ADMIN1',
        email: 'example1@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userName: 'Juan',
        password: '123',
        typeUser: 'ADMIN2',
        email: 'example2@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userName: 'Joyce',
        password: '123',
        typeUser: 'ALUMNO',
        email: 'joyce@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userName: 'Maria',
        password: '123',
        typeUser: 'ENCARGADO',
        email: 'maria@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('User', null, {});
  }
};
