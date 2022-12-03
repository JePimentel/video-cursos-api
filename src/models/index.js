const Users = require('./usersModel')
const Courses = require('./coursesModel')
const UsersCourses = require('./usersCoursesModel')
const Categories = require('./categoriesModel')
const Videos = require('./videosModel')

const initModels = () => {
  Users.belongsToMany(Courses,      { through: UsersCourses }  )
  Courses.belongsToMany(Users,      { through: UsersCourses }  )
  
  Courses.hasMany(Categories)
  Categories.belongsTo(Courses)

  Courses.hasMany(Videos)
  Videos.belongsTo(Courses)
}

module.exports = initModels