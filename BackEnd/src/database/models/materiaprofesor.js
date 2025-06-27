'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class materiaProfesores extends Model {
    static associate(models) {
        materiaProfesores.belongsTo(models.Materias, {
        as: "materia",
        foreignKey: "materiaId",
      });
        materiaProfesores.belongsTo(models.Users, {
        as: "profesor",
        foreignKey: "profesorId",
      });
    }
  }
  materiaProfesores.init({
    materiaId: DataTypes.INTEGER,
    profesorId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'materiaProfesores',
  });
  return materiaProfesores;
};