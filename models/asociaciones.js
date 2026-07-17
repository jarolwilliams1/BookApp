const libromodel = require("./libromodel");
const categoriamodel = require("./categoriamodel");
const autormodel = require("./autormodel");
const editorialmodel = require("./editorialmodel");

categoriamodel.hasMany(libromodel, { foreignKey: "categoriaid" });
libromodel.belongsTo(categoriamodel, { foreignKey: "categoriaid" });

autormodel.hasMany(libromodel, { foreignKey: "autorid" });
libromodel.belongsTo(autormodel, { foreignKey: "autorid" });

editorialmodel.hasMany(libromodel, { foreignKey: "editorialid" });
libromodel.belongsTo(editorialmodel, { foreignKey: "editorialid" });

module.exports = { libromodel, categoriamodel, autormodel, editorialmodel };
