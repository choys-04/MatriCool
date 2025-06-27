'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Horarios extends Model {
    static associate(models) {
      Horarios.belongsTo(models.Secciones, {
        as: "seccion",
        foreignKey: "seccionId",
      });
      Horarios.belongsTo(models.Users, {
        as: "profesor",
        foreignKey: "profesorId",
      });
    }
  }
  Horarios.init({
    seccionId: DataTypes.INTEGER,
    profesorId: DataTypes.INTEGER,
    dia: DataTypes.STRING,
    inicio: DataTypes.TIME,
    final: DataTypes.TIME
  }, {
    sequelize,
    modelName: 'Horarios',
  });
  return Horarios;
};