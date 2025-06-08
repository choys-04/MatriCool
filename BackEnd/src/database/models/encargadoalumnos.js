'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class encargadoAlumnos extends Model {
    static associate(models) {
       User.belongsTo(models.alumnoId, {
        as: "hijos",
        foreignKey: "alumnoId",
      });
       User.belongsTo(models.encargadoId, {
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