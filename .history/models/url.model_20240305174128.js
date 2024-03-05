const mongoose = require ('mongoose')
const shortid = require('shortid')
const Schema = mongoose.Schema

const ShortUrlSchema = new Schema({

	url: {
		type: String,
		required: true,
	},
	shortid: {
		type: St
	}
})