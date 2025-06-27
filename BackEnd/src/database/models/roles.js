'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Roles extends Model {
    static associate(models) {}
  }
  Roles.init({
    nombre: DataTypes.STRING,
    modulos: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Roles',
  });
  return Roles;
};