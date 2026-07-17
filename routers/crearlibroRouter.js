
const express = require("express");
const router = express.Router();
const crearlibroController = require("../controllers/crearlibroController");

router.get("/", crearlibroController.mostrar);
router.post("/", crearlibroController.crear);

module.exports = router;
