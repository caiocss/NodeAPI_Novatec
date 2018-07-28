//server/route/index.js
const express = require('express')
const route = express.Router()
const MainController = require('../controller/MainController')
const BookController = require('../controller/BookController')
const AuthorController = require('../controller/AuthorController')

// http://localhost:3000/

route.get('/', MainController.getHome)
route.get('/books', MainController.getBooks)

route.get('/api/books', BookController.list)
route.get('/api/books/:id', BookController.getById)
route.post('/api/books', BookController.create)
route.put('/api/books/:id', BookController.update)
route.delete('/api/books/:id', BookController.delete)

route.get('/api/authors', AuthorController.list)

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