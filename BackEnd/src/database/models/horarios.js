'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class horarios extends Model {
    static associate(models) {
     User.belongsTo(models.seccionIdd, {
        as: "seccion",
        foreignKey: "seccionId",
      });
      User.belongsTo(models.profesorIdId, {
        as: "profesor",
        foreignKey: "profesorId",
      });
       User.belongsTo(models.alumnoId, {
        as: "dia",
        foreignKey: "diaId",
      });
       User.belongsTo(models.alumnoId, {
        as: "inicio",
        foreignKey: "inicioId",
      });
       User.belongsTo(models.alumnoId, {
        as: "final",
        foreignKey: "finald",
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