const express = require("express");
const router = express.Router();
const editarCategoriaController = require("../controllers/editarCategoriaController");

router.get("/", editarCategoriaController.mostrar);

module.exports = router;