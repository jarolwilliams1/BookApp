const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const { FOREIGNKEYS } = require("sequelize/lib/query-types");


const editorialmodel = sequelize.define('categoria',{
    " LibroID": {type:DataTypes.INTEGER, primaryKey:true, autoIncrement: true
},

    "CategoriaID":DataTypes.INTEGER, FOREIGNKEYS: true,
        "AutorID":DataTypes.INTEGER, FOREIGNKEYS: true,
    "EditorialID":DataTypes.INTEGER, FOREIGNKEYS: true,
    "Titulo": DataTypes.STRING,
     "URLImagen": DataTypes.STRING,
    "Year": DataTypes.INTEGER

})


module.exports = editorialmodel;