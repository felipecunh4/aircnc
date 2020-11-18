const express = require('express')
const routes = express.Router()

// req.query = acessar query params (filtros)
// ex: /users?idade=24 -> req.query.idade

// req.params = acessar route params (edicao, delete)
// ex: /users/:id -> req.params.id

// req.body = acessar corpo da requisicao (criacao, edicao)

routes.post('/users', (req, res) => {
  return res.json(req.body)
})

module.exports = routes
