const express = require('express')
const route = express.Router()
const homeController = require('./src/controllers/homeController')
const contatoController = require('./src/controllers/contatoController')



// Rota da Home
route.get('/', homeController.paginaInicial)






module.exports = route