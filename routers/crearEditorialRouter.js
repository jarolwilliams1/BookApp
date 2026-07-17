const express = require("express");
const router = express.Router();
const crearEditorialController = require("../controllers/crearEditorialController");

router.get("/", crearEditorialController.mostrar);

module.exports = router;