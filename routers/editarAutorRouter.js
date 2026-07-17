const express = require("express");
const router = express.Router();
const editarAutorController = require("../controllers/editarAutorController");

router.get("/", editarAutorController.mostrar);

module.exports = router;