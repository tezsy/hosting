const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
	res.render("questionaire");
});

router.post("/", (req, res) => {
	res.redirect("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
});

module.exports = router;
