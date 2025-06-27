'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Asistencias extends Model {
    static associate(models) {
    }
  }
  Asistencias.init({
    alumnoId: DataTypes.INTEGER,
    profesorId: DataTypes.INTEGER,
    materiaId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Asistencias',
  });
  return Asistencias;
};