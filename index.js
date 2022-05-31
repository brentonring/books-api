require("dotenv").config();
const express = require('express')
const app = express()
const PORT = process.env.PORT; //PORT 3300

app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))

const booksController = require('./controllers/books_ctr')
app.use('/books', booksController)

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.use(express.json())

app.listen(PORT, () => {
    console.log('Up and running!')
})