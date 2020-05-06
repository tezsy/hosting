const express = require("express");
const router = express.Router();

const { getKhatam, postKhatam, law } = require("../controllers/khatam");

router.get("/", getKhatam);
router.get("/ciknis_pipau", law);
router.post("/", postKhatam);

module.exports = router;
