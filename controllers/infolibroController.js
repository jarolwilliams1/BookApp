const { libromodel, categoriamodel, autormodel, editorialmodel } = require("../models/asociaciones");

async function mostrar(req, res) {
  const { id } = req.params;

  const libro = await libromodel.findByPk(id, {
    include: [categoriamodel, autormodel, editorialmodel]
  });

  res.render("info-libro", { libro });
}

module.exports = { mostrar };
