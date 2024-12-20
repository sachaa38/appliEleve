const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const eleveRoutes = require('./routes/eleveRoutes')
const userRoutes = require('./routes/userRoutes')
const path = require('path')

const app = express()
console.log("Server Origin:", process.env.SERVER_ORIGIN);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'))

app.use(express.json())

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', process.env.SERVER_ORIGIN )
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
  )
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS'
  )
  next()
})

app.use('/api/eleve', eleveRoutes)
app.use('/api/auth', userRoutes)


module.exports = app
