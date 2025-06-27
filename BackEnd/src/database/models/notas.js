'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Notas extends Model {
    static associate(models) {
     Notas.hasOne(models.Users, {
        as: "alumno",
        foreignKey: "alumnoId",
      });
     Notas.hasMany(models.Materias, {
        as: "materia",
        foreignKey: "materiaId",
      });
     Notas.hasOne(models.Users, {
        as: "usuario",
        foreignKey: "usuarioId",
      });    
    }    
  }
  Notas.init({
    alumnoId: DataTypes.INTEGER,
    materiaId: DataTypes.INTEGER,
    usuarioId: DataTypes.INTEGER,
    nota: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Notas',
  });
  return Notas;
};