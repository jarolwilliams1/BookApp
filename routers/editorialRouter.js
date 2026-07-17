const express = require("express");
const router = express.Router();
const editorialController = require("../controllers/editorialController");

router.get("/", editorialController.mostrar);

module.exports = router;