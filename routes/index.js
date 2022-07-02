const router = require('express').Router()
const usersRouter = require('./users')

router.get('/', (req, res) => res.sendFile(`${__dirname}/index.html`))

router.use('/users', usersRouter)

module.exports = router