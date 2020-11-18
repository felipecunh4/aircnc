const express = require('express')
const routes = express.Router()
const SessionController = require('./controllers/SessionController')

// req.query = acessar query params (filtros)
// ex: /users?idade=24 -> req.query.idade

// req.params = acessar route params (edicao, delete)
// ex: /users/:id -> req.params.id

// req.body = acessar corpo da requisicao (criacao, edicao)

routes.post('/sessions', SessionController.store)

module.exports = routes
