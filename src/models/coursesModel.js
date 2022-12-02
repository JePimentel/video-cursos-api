const { DataTypes } = require('sequelize')
const db = require('../db/db')

const Courses = db.define("Courses", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  description: {
    type: DataTypes.STRING
  },
  instructor: {
    type: DataTypes.STRING(100),
    allowNull: false
  }
})

module.exports = Courses