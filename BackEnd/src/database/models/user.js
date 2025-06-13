"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasOne(models.dataUser, {
        as: "datosPersonales",
        foreignKey: "userId",
      });
       User.hasMany(models.encargadoAlumnos, {
        as: "alumnos",
        foreignKey: "userId",
      });
       User.hasMany(models.encargadoAlumnos, {
        as: "encargados",
        foreignKey: "userId",
      });
       User.hasMany(models.encargadoAlumnos, {
        as: "nota",
        foreignKey: "userId",
      });
    }
  }
  User.init(
    {
      userName: DataTypes.STRING,
      pass: DataTypes.STRING,
      email: DataTypes.STRING,
      active: DataTypes.BOOLEAN
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
