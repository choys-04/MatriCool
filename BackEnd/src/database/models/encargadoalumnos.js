'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class encargadoAlumnos extends Model {
    static associate(models) {
       encargadoAlumnos.belongsTo(models.User, {
        as: "hijos",
        foreignKey: "alumnoId",
      });
       encargadoAlumnos.belongsTo(models.User, {
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