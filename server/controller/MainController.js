// server/controller/MainCOntroller.js

const repository = require('../repository/BookRepository')

const MainController = {
  getHome(request, response, next) {  //ecma6 forma de item do objeto
    response.send('Olá Mundo')
  },
  getBooks(request, response, next) {
    repository.findAsync({})
    .then(result => {
      response.render('books', {books: result}) 
    })
    .catch(next)    
  }
}

module.exports = MainController