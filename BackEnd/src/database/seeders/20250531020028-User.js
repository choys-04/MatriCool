"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          userName: "isflores",
          pass: "1234",
          email: "isflores@example.com",
          firstName: "Isaac",
          lastName: "Flores",
          address: "Calle sin salida #2",
          telefono: "78945612",
        },
        {
          userName: "leelo",
          pass: "1234",
          email: "leelo@example.com",
          firstName: "Vane",
          lastName: "Rodri",
          address: "Calle sin salida #3",
          telefono: "78945612",
        },
        {
          userName: "choy04",
          pass: "1234",
          email: "choy04@example.com",
          firstName: "Joy",
          lastName: "Mora",
          address: "Calle sin salida #5",
          telefono: "78945612",
        },
        {
          userName: "Roro",
          pass: "1234",
          email: "Roro@example.com",
          firstName: "Rosa",
          lastName: "Perez",
          address: "Calle sin salida #7",
          telefono: "78945612",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
