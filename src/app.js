const express = require('express')
const db = require('./db/db')
const initModels = require('./models')

const app = express()

app.use(express.json())

db.authenticate()
  .then(() => console.log('database connected'))
  .catch(err => console.log('connection with database failed : ', err))
  
db.sync({ force: true })
  .then(() => console.log('database synchronized'))
  .catch(err => console.log('synchronization failed : ', err))

initModels()


app.listen(8000, () => console.log('listening'))