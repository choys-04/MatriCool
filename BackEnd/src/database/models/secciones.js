'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class secciones extends Model {
    static associate(models) {
     secciones.hasMany(models.seccionAlumnos, {
        as: "seccion",
        foreignKey: "seccionId",
      });
      secciones.hasOne(models.User, {
        as: "profesor",
        foreignKey: "profesorId",
      });
    }
  }
  secciones.init({
    name: DataTypes.STRING,
    profesorId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'secciones',
  });
  return secciones;
};