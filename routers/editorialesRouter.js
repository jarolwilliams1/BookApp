const express = require("express");
const router = express.Router();
const editorialController = require("../controllers/editorialController");

router.get("/", editorialController.mostrar);
router.get("/crear", editorialController.mostrarCrear);
router.post("/crear", editorialController.crearEditorial);
router.get("/editar/:id", editorialController.mostrarEditar);
router.post("/editar/:id", editorialController.editarEditorial);
router.post("/eliminar/:id", editorialController.eliminarEditorial);

module.exports = router;
