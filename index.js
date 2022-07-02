const express = require('express')
const app = express()
app.use(express.static('public'))

const routes = require('./routes')
app.use('/', routes)

const swaggerSetup = require('./swagger-setup')
swaggerSetup(app)

const port = process.env.PORT || 8080
app.listen(port, () => {
    console.log(`App listening http://localhost:${port}`)
})