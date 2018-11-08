const express = require('express');
const productRouter = require('./races/productRouter')
const configureMiddleware = require('./config/middleware')
const server = express();

configureMiddleware(server)
server.use('/api/products', productRouter)

server.use('/', (req, res) => res.send('Up and Running'))

server.listen(8444, () => console.log('port 8444 =^_^='))