const express = require("express");
const router = express.Router();
const autorController = require("../controllers/autorController");

router.get("/", autorController.mostrar);

module.exports = router;