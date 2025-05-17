const { DataTypes } = require('sequelize');
const sequelize = require('../DB/db');

const User = sequelize.define('User', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: DataTypes.STRING,
  email: { type: DataTypes.STRING, unique: true }
});

module.exports = User;