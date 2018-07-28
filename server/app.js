// server/app.js

const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(require('./route')) //chamando index

app.use((request, response, next) => {
  let err = new Error('Não encontrei')
  err.status = 404
  next(err)
})

app.use((error, request, response, next) => {
  response.status(error.status || 500)
  response.send(error.message)

  console.error(error.stack)
})

// app.listen
module.exports = app;