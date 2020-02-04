require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const app = express()
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env
const houseCtrl = require('./controllers/houseController')

app.use(express.json())
app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {maxAge: 1000 * 60 * 60 * 24}
}))

massive(CONNECTION_STRING).then(db => {
  app.set('db', db)
  console.log('Database connected')
  app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`))
})

//ENDPOINTS
app.get('/api/houses', houseCtrl.getHouses)
app.post('/api/houses', houseCtrl.postHouse)
app.delete('/api/houses/:id', houseCtrl.deleteHouse)