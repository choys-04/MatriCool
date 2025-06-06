'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class materias extends Model {
   static associate(models) {
     materias.hasMany(models.materiaprofesor, {
        as: "materia",
        foreignKey: "materiaId",
      });

       materias.belongsToMany(models.notas, {
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