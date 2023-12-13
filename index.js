const jsonServer = require('json-server')
const cors = require('cors')
const path = require('path')

const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()

const corsOptions = {
  origin: ["https://zany-plum-crow-veil.cyclic.app"],
  optionsSuccessStatus: 200 // For legacy browser support
}

server.use(cors(corsOptions))
server.use(jsonServer.bodyParser)
server.use(middlewares)
server.use(router)

const PORT = 5001

server.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`)
})
