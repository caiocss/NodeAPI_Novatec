const repository = require('../repository/AuthorRepository')


const AuthorController = {
  list(request, response, next) {
    repository.findAsync({})
    .then(result => response.json(result))
    .catch(next)
  },
  getById() {

  },
  create() {

  },
  update() {

  },
  delete() {

  }
}

module.exports = AuthorController