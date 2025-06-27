'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Config extends Model {
    static associate(models) {
    }
  }
  Config.init({
    clave: DataTypes.STRING,
    valor: DataTypes.TEXT,
    tipo: { 
        type: DataTypes.ENUM("INTEGER", "STRING", "BOOLEAN"), 
        allowNull: false, 
        defaultValue: "STRING"
    }
  }, {
    sequelize,
    modelName: 'Config',
  });
  return Config;
};