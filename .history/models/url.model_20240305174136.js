const mongoose = require ('mongoose')
const { required } = require('nodemon/lib/config')
const shortid = require('shortid')
const Schema = mongoose.Schema

const ShortUrlSchema = new Schema({

	url: {
		type: String,
		required: true,
	},
	shortid: {
		type: String,
		required
	}
})