require("dotenv").config();
const express = require('express')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT; //PORT 3300

app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
app.use(express.json())
app.use(cors())

const booksController = require('./controllers/books_ctr')
app.use('/books', booksController)

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(PORT, () => {
    console.log('CORS-enabled web server listening on port', PORT)
})