const Categoria = require("../models/categoriamodel");

const crearCategoria = async (req, res) => {
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

async function mostrar(req, res) {


  res.render("categoria");
}

module.exports = { mostrar, crearCategoria};

