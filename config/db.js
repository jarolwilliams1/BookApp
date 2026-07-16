const { Sequelize } = require("sequelize");

// parametros de conexion 
const sequelize = new Sequelize('BookAppDB', 'postgres', 'jarolpostgres', {
  host: 'localhost',
  dialect: 'postgres'
});

// probar conexión
sequelize.authenticate()
  .then(() => console.log("Conexión exitosa a la BD"))
  .catch(err => console.error("Error de conexión:", err));

module.exports = sequelize