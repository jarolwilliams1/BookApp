const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");


const editorialmodel = sequelize.define('categoria',{
    " EditorialID": {type:DataTypes.INTEGER, primaryKey:true, autoIncrement: true
},
    "NombreEditorial":DataTypes.STRING,
    "TelefonoEditorial": DataTypes.STRING,
    "PaisEditorial": DataTypes.STRING

})


module.exports = editorialmodel;