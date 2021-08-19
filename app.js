const express = require('express')
const nunjucks = require('nunjucks')
const path = require('path')

var app = express()

app.use(express.static(path.join(__dirname, 'public')));
app.use('/marta', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')))

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