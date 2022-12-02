const { DataTypes } = require('sequelize')
const db = require('../db/db')
const Users = require('./usersModel')
const Courses = require('./coursesModel')

const UsersCourses = db.define('users_courses', {
  userId: {
    type: DataTypes.INTEGER,
    field: "user_id",
    references: {
      model: Users,
      key: "id"
    }
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

module.exports = UsersCourses