const api = require("../database/conf");
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Users = new Schema({
	name: String,
	idade: Number,
	email: {
		type: String,
		required: true,
		unique: true,
	},
})

const ModelUser = mongoose.model('Users', Users);
mongoose.set('useCreateIndex', true)
module.exports = ModelUser
