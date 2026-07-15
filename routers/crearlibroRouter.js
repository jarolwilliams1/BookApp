
const express = require("express");
const router = express.Router();
const crearlibroController = require("../controllers/crearlibroController");

router.get("/", crearlibroController.mostrar);

module.exports = router;