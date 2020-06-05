'use strict'

const { createServer } = require('http')

const PORT = Number.parseInt(process.env.PORT) || 8080
const HEALTH_PORT = Number.parseInt(process.env.HEALTH_PORT) || 8081
const MESSAGE = process.env.MESSAGE || 'Hello'
const ADDRESS = process.env.ADDRESS || '0.0.0.0'

const server = createServer((req, res) => {
  res.end(MESSAGE + '\n')
})

const healthServer = createServer((req, res) => {
  res.end('OK' + '\n')
})

server.listen(PORT, ADDRESS, () => console.log(`Listening on ${ADDRESS}:${PORT}`))
healthServer.listen(HEALTH_PORT, ADDRESS, () => console.log(`Listening on ${ADDRESS}:${HEALTH_PORT}`))
