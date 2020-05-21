const express = require("express");
const router = express.Router();

const { getHome, getFormValidator } = require("../controllers/project20");

router.get("/", getHome);
// router.get("/formValidator", getFormValidator);

module.exports = router;
