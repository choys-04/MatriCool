'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class encargadoAlumnos extends Model {
    static associate(models) {
       encargadoAlumnos.belongsTo(models.Users, {
        as: "hijos",
        foreignKey: "alumnoId",
      });
       encargadoAlumnos.belongsTo(models.Users, {
        as: "encargados",
        foreignKey: "encargadoId",
      });
    
    }
  }
  encargadoAlumnos.init({
    alumnoId: DataTypes.INTEGER,
    encargadoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'encargadoAlumnos',
  });
  return encargadoAlumnos;
};