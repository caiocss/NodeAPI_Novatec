
const db = require('../config/mysql')
const bluebird = require('bluebird')

const AuthorRepository = {
  find(query, callback) {
    db.query('SELECT * FROM author', callback)
  },
  findById(id, callback) {
    db.query('SELECT id FROM author', callback)
  },
  create() {},
  update() {},
  delete() {},
}

module.exports = bluebird.promisifyAll(AuthorRepository)