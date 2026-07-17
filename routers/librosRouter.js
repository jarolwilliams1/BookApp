const express = require("express");
const router = express.Router();
const libroController = require("../controllers/librosController");

router.get("/", libroController.mostrar);
router.post("/eliminar/:id", libroController.eliminar);

module.exports = router;
