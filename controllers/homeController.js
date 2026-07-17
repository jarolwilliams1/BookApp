const { libromodel, categoriamodel, autormodel, editorialmodel } = require("../models/asociaciones");
const { Op } = require("sequelize");

async function mostrar(req, res) {

  const { titulo, categorias } = req.query;

  const categoriasSeleccionadas = categorias ? (Array.isArray(categorias) ? categorias : [categorias]) : [];

  const where = {};

  if (titulo) {
    where.titulo = { [Op.iLike]: `%${titulo}%` };
  }

  if (categoriasSeleccionadas.length > 0) {
    where.categoriaid = categoriasSeleccionadas;
  }

  const libros = await libromodel.findAll({
    where,
    include: [categoriamodel, autormodel, editorialmodel]
  });

  const todasCategorias = await categoriamodel.findAll();

  const categoriasCheckbox = todasCategorias.map((categoria) => ({
    categoriaid: categoria.categoriaid,
    nombrecategoria: categoria.nombrecategoria,
    marcada: categoriasSeleccionadas.includes(String(categoria.categoriaid))
  }));

  res.render("home", { libros, categorias: categoriasCheckbox, titulo });
}

module.exports = { mostrar };
