const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");


const categoriamodel = sequelize.define('categoria',{
    "categoriaid": {type:DataTypes.INTEGER, primaryKey:true, autoIncrement: true
},
    "nombrecategoria":DataTypes.STRING,
    "descripcioncategoria": DataTypes.STRING


})


module.exports = categoriamodel;


