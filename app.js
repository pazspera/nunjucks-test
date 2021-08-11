const express = require('express')
const nunjucks = require('nunjucks')

var app = express()

nunjucks.configure('views', {
  autoescape: true,
  express: app
})

app.set('view engine', 'njk')

const PORT = '5000'

app.get('/', (req, res) => {
  res.render('home.html')
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`)
})