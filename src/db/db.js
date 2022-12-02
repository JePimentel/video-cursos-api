const { Sequelize } = require('sequelize')

const db = new Sequelize({
  database: "videodb",
  username: "postgres",
  host: "localhost",
  password: "root",
  port: 5432,
  dialect: "postgres"
})

module.exports = db