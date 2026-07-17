const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");


const autoramodel = sequelize.define('categoria',{
    " AutorID": {type:DataTypes.INTEGER, primaryKey:true, autoIncrement: true
},
    "NombreAutor":DataTypes.STRING,
    "CorreoAutor": DataTypes.STRING


})


module.exports = autoramodel;
