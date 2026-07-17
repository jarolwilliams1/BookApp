const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");


const autormodel = sequelize.define('autor',{
    "autorid": {type:DataTypes.INTEGER, primaryKey:true, autoIncrement: true
},
    "nombreautor":DataTypes.STRING,
    "correoautor": DataTypes.STRING


})


module.exports = autormodel;

