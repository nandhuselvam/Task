const express = require ('express')
const shortid = require ('shortid')
const createHttpError = require('http-errors')
const mongoose = require('mongoose')
const path = require('path')

const app = express()
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

mongoose.connect('mongodb://localhost:27017', {
	dbName: 'url-Shortner',
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCrea
})

app.set('view engine', 'ejs')

app.get('/', async (req, res, next) => {
	res.render('index')
})

app.post('/', async (req, res, next) => {})

app.listen (3000, () => console.log('port number is 3000'))