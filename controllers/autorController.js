const autormodel = require("../models/autormodel");
const libromodel = require("../models/libromodel");

async function mostrar(req, res) {
  const autores = await autormodel.findAll();

  const autoresConCantidad = await Promise.all(autores.map(async (autor) => {
    const cantidadLibros = await libromodel.count({ where: { autorid: autor.autorid } });
    return {
      autorid: autor.autorid,
      nombreautor: autor.nombreautor,
      correoautor: autor.correoautor,
      cantidadLibros
    };
  }));

  res.render("mantenimientoAutores", { autores: autoresConCantidad });
}

async function mostrarCrear(req, res) {
  res.render("crearAutor");
}

async function crearAutor(req, res) {
  const { nombreautor, correoautor } = req.body;

  await autormodel.create({ nombreautor, correoautor });

  res.redirect("/autores");
}

async function mostrarEditar(req, res) {
  const { id } = req.params;

  const autor = await autormodel.findByPk(id);

  res.render("editarAutor", { autor });
}

async function editarAutor(req, res) {
  const { id } = req.params;
  const { nombreautor, correoautor } = req.body;

  await autormodel.update({ nombreautor, correoautor }, { where: { autorid: id } });

  res.redirect("/autores");
}

async function eliminarAutor(req, res) {
  const { id } = req.params;

  await autormodel.destroy({ where: { autorid: id } });

  res.redirect("/autores");
}

module.exports = { mostrar, mostrarCrear, crearAutor, mostrarEditar, editarAutor, eliminarAutor };
