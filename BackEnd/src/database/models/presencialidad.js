'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class presencialidad extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.alumnoId, {
        as: "asistencia",
        foreignKey: "horarios",
      });
      User.belongsTo(models.profesorIdId, {
        as: "asistencia",
        foreignKey: "profesorId",
      });
      User.belongsTo(models.materiaIdId, {
        as: "asistencia",
        foreignKey: "materiaId",
      });
    }
  }
  presencialidad.init({
    alumnoId: DataTypes.INTEGER,
    profesorId: DataTypes.INTEGER,
    materiaId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'presencialidad',
  });
  return presencialidad;
};