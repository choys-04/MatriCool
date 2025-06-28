'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class seccionProfesores extends Model {
    static associate(models) {
      seccionProfesores.belongsTo(models.Secciones, {
        as: "seccion",
        foreignKey: "seccionId",
      });
       seccionProfesores.belongsTo(models.Users, {
        as: "profesor",
        foreignKey: "profesorId",
      });
    }
  }
  seccionProfesores.init({
    seccionId: DataTypes.INTEGER,
    profesorId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'seccionProfesores',
  });
  return seccionProfesores;
};