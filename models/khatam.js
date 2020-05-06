const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  data: Object,
});
const Data = new mongoose.model("Data", dataSchema);

module.exports = Data;
