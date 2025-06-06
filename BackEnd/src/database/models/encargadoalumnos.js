'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class encargadoAlumnos extends Model {
    static associate(models) {
       User.belongsTo(models.dataUser, {
        as: "hijos",
        foreignKey: "userId",
      });
       User.belongsTo(models.dataUser, {
        as: "encargados",
        foreignKey: "userId",
      });
       User.belongsTo(models.dataUser, {
        as: "nota",
        foreignKey: "userId",
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