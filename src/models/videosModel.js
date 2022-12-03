const { DataTypes } = require('sequelize')
const db = require('../db/db')
const Courses = require('./coursesModel')

const Videos = db.define('Videos', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: false
})

module.exports = Videos