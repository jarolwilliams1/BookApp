const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");


const libromodel = sequelize.define('libro',{
    "libroid": {type:DataTypes.INTEGER, primaryKey:true, autoIncrement: true
},
    "titulo":DataTypes.STRING,
    "year": DataTypes.INTEGER,
    "urlimagen": DataTypes.TEXT


})


module.exports = libromodel;
