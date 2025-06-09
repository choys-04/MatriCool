'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class materias extends Model {
   static associate(models) {
     materias.hasMany(models.materiaProfesor, {
        as: "materia",
        foreignKey: "materiaId",
      });

       materias.belongsTo(models.notas, {
        as: "notas",
        foreignKey: "notaId",
      });
    }
  }
  materias.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'materias',
  });
  return materias;
};