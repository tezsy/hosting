const mongoose = require("mongoose");

const zikirSchema = new mongoose.Schema({
	name: String,
	password: String,
	data: [
		{
			date: String,
			zikirDone: Number,
		},
	],
});
const Zikir = new mongoose.model("Zikir", zikirSchema);

module.exports = Zikir;
