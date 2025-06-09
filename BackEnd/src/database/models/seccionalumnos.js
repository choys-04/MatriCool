'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class seccionAlumnos extends Model {
    
    static associate(models) {
      seccionAlumnos.belongsTo(models.secciones, {
        as: "seccion",
        foreignKey: "seccionId",
      });
      seccionAlumnos.belongsTo(models.User, {
        as: "alumnos",
        foreignKey: "alumnoId",
      });
    }
  }
  seccionAlumnos.init({
    seccionId: DataTypes.INTEGER,
    alumnoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'seccionAlumnos',
  });
  return seccionAlumnos;
};