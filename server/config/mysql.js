
const mySQL = require('mysql')


const connection = mySQL.createConnection({
  host      : 'mysql524.umbler.com',
  port      : 41890,
  user      : 'livro',
  password  : 'livro123',
  database  : 'livraria'
})

connection.connect()

module.exports = connection

