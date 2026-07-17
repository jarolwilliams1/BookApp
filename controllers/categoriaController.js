const categoriamodel = require("../models/categoriamodel");
const libromodel = require("../models/libromodel");

async function mostrar(req, res) {
  const categorias = await categoriamodel.findAll();

  const categoriasConCantidad = await Promise.all(categorias.map(async (categoria) => {
    const cantidadLibros = await libromodel.count({ where: { categoriaid: categoria.categoriaid } });
    return {
      categoriaid: categoria.categoriaid,
      nombrecategoria: categoria.nombrecategoria,
      descripcioncategoria: categoria.descripcioncategoria,
      cantidadLibros
    };
  }));

  res.render("mantenimientoCategoria", { categorias: categoriasConCantidad });
}

async function mostrarCrear(req, res) {
  res.render("categoria");
}

async function crearCategoria(req, res) {
  const { nombrecategoria, descripcioncategoria } = req.body;

  await categoriamodel.create({ nombrecategoria, descripcioncategoria });

  res.redirect("/categoria");
}

async function mostrarEditar(req, res) {
  const { id } = req.params;

  const categoria = await categoriamodel.findByPk(id);

  res.render("editarCategoria", { categoria });
}

async function editarCategoria(req, res) {
  const { id } = req.params;
  const { nombrecategoria, descripcioncategoria } = req.body;

  await categoriamodel.update({ nombrecategoria, descripcioncategoria }, { where: { categoriaid: id } });

  res.redirect("/categoria");
}

async function eliminarCategoria(req, res) {
  const { id } = req.params;

  await categoriamodel.destroy({ where: { categoriaid: id } });

  res.redirect("/categoria");
}

module.exports = { mostrar, mostrarCrear, crearCategoria, mostrarEditar, editarCategoria, eliminarCategoria };
