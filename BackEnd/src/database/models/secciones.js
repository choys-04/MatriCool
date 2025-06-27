"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Secciones extends Model {
    static associate(models) {
      Secciones.hasMany(models.seccionAlumnos, {
        as: "seccion",
        foreignKey: "seccionId",
      });
      Secciones.hasOne(models.Users, {
        as: "profesor",
        foreignKey: "profesorId",
      });
    }
  }
  Secciones.init(
    {
      name: DataTypes.STRING,
      profesorId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Secciones",
    }
  );
  return Secciones;
};
