
const express = require('express')


module.exports = function (server) {

    // API Routes
    const router = express.Router()
    server.use('/api', router)

    const produto = require('../api/produtos/produtoServices.js')
    server.use('/api/produto', produto)
}