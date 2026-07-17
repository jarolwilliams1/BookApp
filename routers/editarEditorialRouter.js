const express = require("express");
const router = express.Router();
const editarEditorialController = require("../controllers/editarEditorialController");

router.get("/", editarEditorialController.mostrar);

module.exports = router;