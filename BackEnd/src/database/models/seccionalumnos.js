'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class seccionAlumnos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        seccionAlumnos.belongsTo(models.secciones, {
        as: "seccion",
        foreignKey: "seccionId",
      });
       seccionAlumnos.belongsToMany(models.user, {
        as: "alumnos",
        foreignKey: "alumnoId",
      });
    }
  }
  seccionAlumnos.init({
    seccionId: DataTypes.INTEGER,
    alumnoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'seccionAlumnos',
  });
  return seccionAlumnos;
};