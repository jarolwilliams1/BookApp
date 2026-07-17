const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");


const editorialmodel = sequelize.define('editorial',{
    "editorialid": {type:DataTypes.INTEGER, primaryKey:true, autoIncrement: true
},
    "nombreeditorial":DataTypes.STRING,
    "telefonoeditorial": DataTypes.STRING,
    "paiseditorial": DataTypes.STRING


})


module.exports = editorialmodel;
