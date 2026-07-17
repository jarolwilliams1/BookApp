const { libromodel, categoriamodel, autormodel, editorialmodel } = require("../models/asociaciones");

async function mostrar(req, res) {

  const categorias = await categoriamodel.findAll();
  const autores = await autormodel.findAll();
  const editoriales = await editorialmodel.findAll();

  if (categorias.length === 0 || autores.length === 0 || editoriales.length === 0) {
    return res.render("crearlibro", {
      sinDatos: true
    });
  }

  res.render("crearlibro", { categorias, autores, editoriales });
}

async function crear(req, res) {
  const { titulo, year, urlimagen, categoriaid, autorid, editorialid } = req.body;

  await libromodel.create({ titulo, year, urlimagen, categoriaid, autorid, editorialid });

  res.redirect("/libros");
}

module.exports = { mostrar, crear };
