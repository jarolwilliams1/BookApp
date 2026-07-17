const editorialmodel = require("../models/editorialmodel");
const libromodel = require("../models/libromodel");

async function mostrar(req, res) {
  const editoriales = await editorialmodel.findAll();

  const editorialesConCantidad = await Promise.all(editoriales.map(async (editorial) => {
    const cantidadLibros = await libromodel.count({ where: { editorialid: editorial.editorialid } });
    return {
      editorialid: editorial.editorialid,
      nombreeditorial: editorial.nombreeditorial,
      telefonoeditorial: editorial.telefonoeditorial,
      paiseditorial: editorial.paiseditorial,
      cantidadLibros
    };
  }));

  res.render("manetenimientoEditoriales", { editoriales: editorialesConCantidad });
}

async function mostrarCrear(req, res) {
  res.render("crearEditorial");
}

async function crearEditorial(req, res) {
  const { nombreeditorial, telefonoeditorial, paiseditorial } = req.body;

  await editorialmodel.create({ nombreeditorial, telefonoeditorial, paiseditorial });

  res.redirect("/editoriales");
}

async function mostrarEditar(req, res) {
  const { id } = req.params;

  const editorial = await editorialmodel.findByPk(id);

  res.render("editarEditorial", { editorial });
}

async function editarEditorial(req, res) {
  const { id } = req.params;
  const { nombreeditorial, telefonoeditorial, paiseditorial } = req.body;

  await editorialmodel.update({ nombreeditorial, telefonoeditorial, paiseditorial }, { where: { editorialid: id } });

  res.redirect("/editoriales");
}

async function eliminarEditorial(req, res) {
  const { id } = req.params;

  await editorialmodel.destroy({ where: { editorialid: id } });

  res.redirect("/editoriales");
}

module.exports = { mostrar, mostrarCrear, crearEditorial, mostrarEditar, editarEditorial, eliminarEditorial };
