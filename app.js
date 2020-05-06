require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const app = express();
const morgan = require("morgan");

const khatam = require("./routes/khatam");
const projects20 = require("./routes/project20");

// const { test } = require("./controllers/khatam");
const cors = require("cors");

app.use(express.json());
app.use(express.static("public"));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors());

// app.post("/khatam", test);

// *database
mongoose
  .connect("mongodb://localhost:27017/data", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("databases connected"))
  .catch(() => console.log("could not connect databases"));

app.get("/", function (req, res) {
  res.render("home");
});

app.use("/khatam", khatam);
app.use("/20-projects", projects20);

app.listen(3000, function () {
  console.log("Server started on port 3000.");
});
