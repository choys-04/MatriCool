'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Materias extends Model {
   static associate(models) {
     Materias.hasMany(models.materiaProfesores, {
        as: "materia",
        foreignKey: "materiaId",
      });

     Materias.belongsTo(models.Notas, {
        as: "notas",
        foreignKey: "notaId",
      });
    }
  }
  Materias.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Materias',
  });
  return Materias;
};