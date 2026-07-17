
const express = require("express");
const router = express.Router();
const editarlibroController = require("../controllers/editarlibroController");

router.get("/:id", editarlibroController.mostrar);
router.post("/:id", editarlibroController.actualizar);

module.exports = router;
