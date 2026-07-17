const { libromodel, categoriamodel, autormodel, editorialmodel } = require("../models/asociaciones");

async function mostrar(req, res) {
  const { id } = req.params;

  const categorias = await categoriamodel.findAll();
  const autores = await autormodel.findAll();
  const editoriales = await editorialmodel.findAll();

  if (categorias.length === 0 || autores.length === 0 || editoriales.length === 0) {
    return res.render("editarLibro", {
      sinDatos: true
    });
  }

  const libro = await libromodel.findByPk(id);

  const categoriasSelect = categorias.map((categoria) => ({
    categoriaid: categoria.categoriaid,
    nombrecategoria: categoria.nombrecategoria,
    seleccionada: categoria.categoriaid === libro.categoriaid
  }));

  const autoresSelect = autores.map((autor) => ({
    autorid: autor.autorid,
    nombreautor: autor.nombreautor,
    seleccionado: autor.autorid === libro.autorid
  }));

  const editorialesSelect = editoriales.map((editorial) => ({
    editorialid: editorial.editorialid,
    nombreeditorial: editorial.nombreeditorial,
    seleccionada: editorial.editorialid === libro.editorialid
  }));

  res.render("editarLibro", {
    libro,
    categorias: categoriasSelect,
    autores: autoresSelect,
    editoriales: editorialesSelect
  });
}

async function actualizar(req, res) {
  const { id } = req.params;
  const { titulo, year, urlimagen, categoriaid, autorid, editorialid } = req.body;

  const datosActualizar = { titulo, year, categoriaid, autorid, editorialid };

  if (urlimagen) {
    datosActualizar.urlimagen = urlimagen;
  }

  await libromodel.update(datosActualizar, { where: { libroid: id } });

  res.redirect("/libros");
}

module.exports = { mostrar, actualizar };
