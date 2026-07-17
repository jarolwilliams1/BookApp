const express = require("express");
const router = express.Router();
const autorController = require("../controllers/autorController");

router.get("/", autorController.mostrar);
router.get("/crear", autorController.mostrarCrear);
router.post("/crear", autorController.crearAutor);
router.get("/editar/:id", autorController.mostrarEditar);
router.post("/editar/:id", autorController.editarAutor);
router.post("/eliminar/:id", autorController.eliminarAutor);

module.exports = router;
