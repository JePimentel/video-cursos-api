const { DataTypes } = require('sequelize')
const db = require('../db/db')

const Users = db.define("Users", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  }, 
  firstName: {
    type: DataTypes.STRING(100),
    allowNull: false,
    field: "first_name"
  },
  lastName: {
    type: DataTypes.STRING(100),
    field: "last_name"
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
})

module.exports = Users