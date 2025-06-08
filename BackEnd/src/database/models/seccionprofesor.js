'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class seccionProfesor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsTo(models.seccionIdd, {
        as: "seccion",
        foreignKey: "seccionId",
      });
       User.belongsTo(models.profesorId, {
        as: "profesor",
        foreignKey: "seccionprofesorId",
      });
    }
  }
  seccionProfesor.init({
    seccionId: DataTypes.INTEGER,
    profesorId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'seccionProfesor',
  });
  return seccionProfesor;
};