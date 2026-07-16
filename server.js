
const express = require("express");
const path = require("path");
const { engine } = require("express-handlebars");

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


const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
