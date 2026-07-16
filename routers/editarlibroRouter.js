
const express = require("express");
const router = express.Router();
const editarlibroController = require("../controllers/editarlibroController");

router.get("/", editarlibroController.mostrar);

module.exports = router;