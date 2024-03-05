const express = require ('express')
const shortid = require ('shortid')
const createHttpError = require('http-errors')
const mongoose = require('mongoose')
const path = require('path')
const ShortUrl = require ('./models/url.model')

const app = express()
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

mongoose
.connect('mongodb://localhost:27017', {
	dbName: 'url-Shortner',
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
})
.then(()=> console.log('mongoose connected'))
.catch((error) => console.log('Error connecting..'))


app.set('view engine', 'ejs')

app.get('/', async (req, res, next) => {
	res.render('index')
})

app.post('/', async (req, res, next) => {
	try {
		const { url } = req.body
		if (!url) {
			throw createHttpError.BadRequest('Provide a valid url')
		}
		const UrlExists = await ShortUrl.findOne({ url }) 
		if (urlExists) {
			res.render('index',{short_url:'http://localhost:3000/${urlExists.shortId}'})
			return
		}
		const shortUrl = new ShortUrl({url: url, shortId: shortid.generate() })
		const result = await shortUrl.save()
		res.render('index', {
			short_Url:`http://localhost:3000/${result.shortId}`
		})
	} catch (error) {
			next(error)
	}
})


app.get('/:shortId', async (req, res, next) => {
	const {shortId} = req.params
	const result = await ShortUrl.finf
})


app.use((req, res, next) => {
	next(createHttpError.NotFound())
})
app.use((err, req, res, next) => {
	res.status(err.status || 500)
	res.render('index', {error: err.message })
})

app.listen (3000, () => console.log('port number is 3000'))