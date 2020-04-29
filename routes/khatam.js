const express = require("express");
const router = express.Router();
const { getKhatam, postKhatam, law } = require("../controllers/khatam");

router.get("/", getKhatam);
router.post("/", postKhatam);
router.get("/ciknis_pipau", law);

module.exports = router;
