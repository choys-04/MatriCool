'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Actividades extends Model {
    static associate(models) {}
  }
  Actividades.init({
    name: DataTypes.STRING,
    descripcion: DataTypes.TEXT,
    fechaInicio: DataTypes.DATE,
    fechaFinal: DataTypes.DATE,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Actividades',
  });
  return Actividades;
};