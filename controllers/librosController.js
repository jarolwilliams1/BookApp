const { libromodel, categoriamodel, autormodel, editorialmodel } = require("../models/asociaciones");

async function mostrar(req, res) {

  const libros = await libromodel.findAll({
    include: [categoriamodel, autormodel, editorialmodel]
  });

  res.render("mantenimientosLibros", { libros, cantidad: libros.length });
}

async function eliminar(req, res) {
  const { id } = req.params;

  await libromodel.destroy({ where: { libroid: id } });

  res.redirect("/libros");
}

module.exports = { mostrar, eliminar };
