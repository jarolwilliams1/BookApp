const express = require("express");
const router = express.Router();
const categoriaController = require("../controllers/crearCategoriaController");

router.get("/", categoriaController.mostrar);

module.exports = router;