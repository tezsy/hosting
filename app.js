require("dotenv").config();
const error = require("./middleware/error");
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const app = express();
const morgan = require("morgan");

const khatam = require("./routes/khatam");
const projects20 = require("./routes/project20");
const solat = require("./routes/solat");
const zikir = require("./routes/zikir");
const questionaire = require("./routes/questionaire");
const webCV = require("./routes/webCV");

const cors = require("cors");

app.use(express.json());
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors());

app.use(error);

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
app.use("/solat", solat);
app.use("/questionaire", questionaire);
app.use("/webCV", webCV);
app.use("/zikir", zikir);

app.listen(3030, function () {
	console.log("Server started on port 3030.");
});
