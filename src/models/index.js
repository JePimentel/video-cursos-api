const Users = require('./usersModel')
const Courses = require('./coursesModel')
const UsersCourses = require('./usersCoursesModel')
const Categories = require('./categoriesModel')
const Videos = require('./videosModel')

const initModels = () => {
  Users.belongsToMany(Courses, { through: UsersCourses })
  Courses.belongsToMany(Users, { through: UsersCourses })
  Categories.hasMany(Courses, { foreignKey: 'course_id' })
  Courses.belongsTo(Categories, { foreignKey: 'course_id' })
  Videos.hasMany(Courses, { foreignKey: 'course_id' })
  Courses.belongsTo(Videos, { foreignKey: 'course_id' })
}

module.exports = initModels