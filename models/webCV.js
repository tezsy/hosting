const mongoose = require("mongoose");

const webCVScheme = new mongoose.Schema(
	{
		orderId: { type: String, required: true },
		templateName: { type: String, required: true },
		data: Object,
		image: Array,
	},
	{ timestamps: { createdAt: "created_at" } }
);
const WebCV = new mongoose.model("WebCV", webCVScheme);

module.exports = WebCV;
