const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const ShortUrlSchema = new Schema({
	url: {
		type: String,
		required: true,
	},
	shortid: {
		type: String,
		required: true
	}
})

const ShortUrl = mo