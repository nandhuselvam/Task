const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const ShortUrlSchema = new Schema({

	url: {
		type: String,
		required: tru
	}
})