// server/config/mongo.js

const mongojs = require('mongojs')
const NODE_ENV = process.env.NODE_ENV
let mongoConnection

if (NODE_ENV === 'test') {
  mongoConnection = 'localhost/livraria-test'
} else {
  mongoConnection = 'localhost/livraria'
}

const db = mongojs('localhost/livraria')


// callback
db.on('error', (err) => {
  console.log(err)
})

module.exports = db