const { DataTypes } = require('sequelize')
const db = require('../db/db')
const Courses = require('./coursesModel')

const Categories = db.define('Categories', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  courseId: {
    type: DataTypes.INTEGER,
    field: "course_id",
    references: {
      model: Courses,
      key: "id"
    }
  }
}, {
  timestamps: false
})

module.exports = Categories