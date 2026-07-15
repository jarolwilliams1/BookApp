
const express = require("express");
const router = express.Router();
const infolibroController = require("../controllers/infolibroController");

router.get("/", infolibroController.mostrar);

module.exports = router;