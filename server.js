// Step 1 - Create a Server where the BE is going to run

const http = require('http')
const app = require('./app')

const PORT = process.env.PORT || 3000

const server = http.createServer(app)

server.listen(PORT)