const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generateSentence = require('./generate_ sentence')

app.engine(
  'hbs',
  exphbs({
    defaultLayout: 'main',
    extname: '.hbs',
    helpers: {
      eq: function (v1, v2) {
        return v1 === v2
      }
    }
  })
)
app.set('view engine', 'hbs')
app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const { character } = req.body
  const sentence = generateSentence(character)
  res.render('index', { sentence, character })
})
app.listen(port, () => {
  console.log(`The express server is running on http://localhost:${port}`)
})
