"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    static associate(models) {
      Users.hasMany(models.encargadoAlumnos, {
        as: "alumnos",
        foreignKey: "userId",
      });
      Users.hasMany(models.encargadoAlumnos, {
        as: "encargados",
        foreignKey: "userId",
      });
      Users.hasMany(models.encargadoAlumnos, {
        as: "nota",
        foreignKey: "userId",
      });
    }
  }
  Users.init(
    {
      userName: DataTypes.STRING,
      pass: DataTypes.STRING,
      email: DataTypes.STRING,
      active: DataTypes.BOOLEAN,
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      address: DataTypes.STRING,
      telefono: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Users",
    }
  );
  return Users;
};
