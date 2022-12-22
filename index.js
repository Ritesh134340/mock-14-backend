const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
require("dotenv").config()
const PORT=process.env.PORT || 3000
server.use(middlewares)
server.use(router)

server.listen(PORT, () => {
  console.log('JSON Server is running',PORT)
})



