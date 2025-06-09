'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class horarios extends Model {
    static associate(models) {
      horarios.belongsTo(models.secciones, {
        as: "seccion",
        foreignKey: "seccionId",
      });
      horarios.belongsTo(models.User, {
        as: "profesor",
        foreignKey: "profesorId",
      });
    }
  }
  horarios.init({
    seccionId: DataTypes.INTEGER,
    profesorId: DataTypes.INTEGER,
    dia: DataTypes.STRING,
    inicio: DataTypes.TIME,
    final: DataTypes.TIME
  }, {
    sequelize,
    modelName: 'horarios',
  });
  return horarios;
};