//server/route/index.js
const express = require('express')
const route = express.Router()
const MainController = require('../controller/MainController')
const BookController = require('../controller/BookController')
const AuthorController = require('../controller/AuthorController')

// http://localhost:3000/


const ensureAuth = (request, response, next) => {
  if(request.query.token === '42' || request.headers['x-token'] === '42') {
    return next()
  }
  let err = new Error('saia daqui')
  err.status = 401
  next(err)
}

route.get('/api/authors', AuthorController.list)
route.get('/api/authors/:id', AuthorController.getById)
route.post('/api/authors/', AuthorController.create)
route.put('/api/authors/:id', AuthorController.update)
route.delete('/api/books/:id', AuthorController.delete)

route.get('/', MainController.getHome)
route.get('/books', MainController.getBooks)

route.get('/api/books', BookController.list)
route.get('/api/books/:id', BookController.getById)
route.post('/api/books', BookController.create)
route.put('/api/books/:id', BookController.update)
route.delete('/api/books/:id', BookController.delete)

module.exports = route



/*
route.get('/contato', (request, response, next) => {
  response.status(201).send('Contato')
})
//postman
route.post('/contato', (request, response, next) => {
  response.send('Testando post')
})
*/