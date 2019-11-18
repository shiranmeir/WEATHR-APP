const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const api = require('./server/routes/api')
const path = require('path')

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/', api)

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/weatherDB', { useNewUrlParser: true })//i need to change my db

const port = 1111
app.listen(port, function () {
    console.log(`Running on port ${port}`)
})
