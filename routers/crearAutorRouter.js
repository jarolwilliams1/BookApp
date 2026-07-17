const express = require("express");
const router = express.Router();
const crearAutorController = require("../controllers/crearAutorController");

router.get("/", crearAutorController.mostrar);

module.exports = router;