require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const findOrCreate = require("mongoose-findorcreate");

const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(
  session({
    secret: "Our little secret.",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect("mongodb://localhost:27017/data", { useNewUrlParser: true });
mongoose.set("useCreateIndex", true);
// var d = new Date();

const dataSchema = new mongoose.Schema({
  data: Object,
});

dataSchema.plugin(passportLocalMongoose);
dataSchema.plugin(findOrCreate);

const Data = new mongoose.model("Data", dataSchema);

app.get("/", function (req, res) {
  res.render("home");
});

app.get("/khatamm", function (req, res) {
  Data.findById("5ea063041ec75cf444dba20f", function (err, foundUser) {
    if (err) {
      console.log(err);
    } else {
      if (foundUser) {
        const arr = [];
        for (const property in foundUser.data) {
          arr.push(property.substr(1));
        }

        res.render("secrets", { arr: arr });
      }
    }
  });
});

app.get("/khatam", function (req, res) {
  Data.findById("5ea063041ec75cf444dba20f", function (err, foundUser) {
    if (err) {
      console.log(err);
    } else {
      if (foundUser) {
        const arr = [];
        for (const property in foundUser.data) {
          arr.push(property.substr(1));
        }

        res.render("khatam", { arr: arr });
      }
    }
  });
});

app.get("/khatam/ciknis_pipau", function (req, res) {
  res.render("law");
});

app.post("/khatam", function (req, res) {
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

app.listen(3000, function () {
  console.log("Server started on port 3000.");
});
