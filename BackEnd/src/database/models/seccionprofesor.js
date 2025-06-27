'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class seccionProfesor extends Model {
    static associate(models) {
      seccionProfesor.belongsTo(models.Secciones, {
        as: "seccion",
        foreignKey: "seccionId",
      });
       seccionProfesor.belongsTo(models.Users, {
        as: "profesor",
        foreignKey: "profesorId",
      });
    }
  }
  seccionProfesor.init({
    seccionId: DataTypes.INTEGER,
    profesorId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'seccionProfesor',
  });
  return seccionProfesor;
};