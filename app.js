require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const app = express();
const morgan = require("morgan");
const khatam = require("./routes/khatam");
const projects20 = require("./routes/project20");
const Data = require("./models/khatam");

app.use("/khatam", khatam);
app.use("/20-projects", projects20);

app.use(express.static("public"));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.post("/khatam", (req, res) => {
  console.log(req.body);
  const submittedSecret = req.body;
  Data.findById("5ea063041ec75cf444dba20f", function (err, foundUser) {
    if (err) {
      console.log(err);
    } else {
      if (foundUser) {
        foundUser.data = submittedSecret;
        foundUser.save(function () {
          res.redirect("/khatam");
        });
      }
    }
  });
});

// *database
mongoose.connect("mongodb://localhost:27017/data", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.set("useCreateIndex", true);

app.get("/", function (req, res) {
  res.render("home");
});

app.listen(3000, function () {
  console.log("Server started on port 3000.");
});
