const Categoria = require("../models/categoria");

exports.crearCategoria = async (req, res) => {
  try {
    const nuevaCategoria = await Categoria.create({
      nombrecategoria: "accion",
      descripcioncategoria: req.body.descripcioncategoria
    });
    res.json(nuevaCategoria);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
