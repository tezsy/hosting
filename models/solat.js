const mongoose = require("mongoose");

const solatSchema = new mongoose.Schema({
    date: String,
    doneSubuh: { type: Number, default: 0 },
    doneZohor: { type: Number, default: 0 },
    doneAsar: { type: Number, default: 0 },
    doneMaghrib: { type: Number, default: 0 },
    doneIsyak: { type: Number, default: 0 },
    subuh: String,
    zohor: String,
    asar: String,
    maghrib: String,
    isyak: String,
    syuruk: String,
    sunat: Object,
});
const Solat = new mongoose.model("Solat", solatSchema);

module.exports = Solat;
