
const express = require("express");
const path = require("path");
const { engine } = require("express-handlebars");
const sequelize = require("./config/db");
const app = express();

app.engine("hbs", engine({
    extname: ".hbs",
    defaultLayout: "main",
    helpers: {
        eq: (a, b) => a === b,
        calcularPosicion: (index) => index + 1
    }
}));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

const homeRouter = require("./routers/homeRouters");
app.use("/", homeRouter);

const libroRouter = require("./routers/librosRouter");
app.use("/libros", libroRouter);



const crearlibroRouter = require("./routers/crearlibroRouter");
app.use("/crearlibro", crearlibroRouter);


const infolibroRouter = require("./routers/infolibroRouter");
app.use("/info-libro", infolibroRouter);


const editarlibroRouter = require("./routers/editarlibroRouter");
app.use("/editarlibro", editarlibroRouter);

const CategoriaRouter = require("./routers/categoriarRouter");
app.use("/categoria", CategoriaRouter);

const crearCategoriaRouter = require("./routers/crearCategoriaRouter");
app.use("/crear-categoria", crearCategoriaRouter);

const editarCategoriaRouter = require("./routers/editarCategoriaRouter");
app.use("/editar-categoria", editarCategoriaRouter);


const autorRouter = require("./routers/autorRouter");
app.use("/autores", autorRouter);



const crearAutorRouter = require("./routers/crearAutorRouter");
app.use("/crear-autor", crearAutorRouter);



const editarAutorRouter = require("./routers/editarAutorRouter");
app.use("/editar-autor", editarAutorRouter);



const editorialRouter = require("./routers/editorialRouter");
app.use("/editoriales", editorialRouter);


const crearEditorialRouter = require("./routers/crearEditorialRouter");
app.use("/crear-editorial", crearEditorialRouter);



const editarEditorialRouter = require("./routers/editarEditorialRouter");
app.use("/editar-editorial", editarEditorialRouter);






// sincronizar BD
sequelize.sync().then(() => {
  console.log("Base de datos sincronizada");
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
