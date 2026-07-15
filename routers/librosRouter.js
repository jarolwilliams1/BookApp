const express = require("express");
const router = express.Router();
const libroController = require("../controllers/librosController");

router.get("/", libroController.mostrar);

module.exports = router;