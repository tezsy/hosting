const Data = require("../models/khatam");

exports.getKhatam = (req, res) => {
  Data.findById("5ea063041ec75cf444dba20f", function (err, foundUser) {
    if (err) {
      console.log(err);
    } else {
      if (foundUser) {
        const arr = [];
        for (const property in foundUser.data) {
          arr.push(property.substr(1));
        }

        res.render("khatam/khatam", { arr: arr });
      }
    }
  });
};

exports.postKhatam = (req, res) => {
  const submittedSecret = req.body;
  Data.findById("5ea063041ec75cf444dba20f", function (err, foundUser) {
    if (err) {
      console.log(err);
    } else {
      if (foundUser) {
        foundUser.data = submittedSecret;
        foundUser.save(function () {
          res.redirect("/khatam/khatam");
        });
      }
    }
  });
};

exports.law = (req, res) => {
  res.render("khatam/law");
};
