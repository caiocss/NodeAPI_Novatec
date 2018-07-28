
const assert = require('assert')
const app = require('../server/app')
const request = require('supertest')(app)
const repository = require('../server/repository/BookRepository')

//mocha

describe('Book Crud', () => {
  let id;
  beforeEach(done => {
    const book = {title: 'O Senhor dos Aneis'}
    repository.create(book, (err, data) => {
      id = String(data._id)
      done()
    })
  })

  afterEach(done => {
    repository.delete(id, done)     
  })

  it('GET /api/books should list', (done) => {
    request.get('/api/books')
      .end((err, result) => {
        assert.equal(200, result.status)
        assert.ok(result.body.length)
        console.log(result.body)
        done()
      })
  })

  it('GET /api/books/:id should get one book', (done) => {
    request.get(`/api/books/${id}`)
      .end((err, result) => {
        assert.equal(200, result.status)
        assert.equal(result.body.title, 'O Senhor dos Aneis')
        done()
      })
  })

  it("POST /api/books should createa new book", (done) => {
    const book = { title: 'O Senhor dos Aneis'}
    request
      .post('/api/books')
      .send(book)
      .end((err, result) => {
        assert.equal(201, result.status)
        assert.equal(result.body.title, 'O Senhor dos Aneis')
        done()
      })      
  })

  it('PUT /api/books:id should update a book', () => {
    const book = { pages: 156}
    return request
    .put(`/api/books/${id}`)
    .send(book)
    .then(result => {
      assert.equal(200, result.status)
      return repository.findByIdAsync(id)
    })
    .then(result => {
      assert.equal(156, result.pages)
      assert.equal('O Senhor dos Aneis', result.title)    
    })     
  })

  it('DELETE /api/books/:id', () => {
    return request.delete(`/api/books/${id}`)
      .then(result => {
        assert.equal(result.status, 204)
      })
  })
})