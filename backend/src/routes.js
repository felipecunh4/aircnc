const express = require('express')

const multer = require('multer')
const uploadConfig = require('./config/upload')

const SessionController = require('./controllers/SessionController')
const SpotController = require('./controllers/SpotController')
const DashboardController = require('./controllers/DashboardController')
const BookingController = require('./controllers/BookingController')

const routes = express.Router()
const upload = multer(uploadConfig)

// ex: /users?idade=24 -> req.query.idade
// req.query = acessar query params (filtros)

// req.params = acessar route params (edicao, delete)
// ex: /users/:id -> req.params.id

// req.body = acessar corpo da requisicao (criacao, edicao)

routes.post('/sessions', SessionController.store)

routes.get('/spots', SpotController.index)
routes.post('/spots', upload.single('thumbnail'), SpotController.store)

routes.get('/dashboard', DashboardController.show)

routes.post('/spots/:spot_id/bookings', BookingController.store)

module.exports = routes
