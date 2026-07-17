const express = require("express");
const router = express.Router();
const categoriaController = require("../controllers/categoriaController");

router.get("/", categoriaController.mostrar);
router.get("/crear", categoriaController.mostrarCrear);
router.post("/crear", categoriaController.crearCategoria);
router.get("/editar/:id", categoriaController.mostrarEditar);
router.post("/editar/:id", categoriaController.editarCategoria);
router.post("/eliminar/:id", categoriaController.eliminarCategoria);

module.exports = router;
