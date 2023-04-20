require ("dotenv").config();
const express = require("express");
const hbs = require("hbs");

const app = express();
const port = process.env.PORT;
// Handlebars
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

// Servir contenido estatico
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home",{ 
    nombre: "Mario Alejandro", 
    titulo: "Plantillas con HBS"
});
});
app.get("/hola-mundo/tipos", (req, res) => {
  res.send("Hola mundo tipos!");
});

app.get("/generic", (req, res) => {
  res.render("generic", {
    nombre: "Mario Alejandro",
    titulo: "Plantillas con HBS",
});
});

app.get("/elements", (req, res) => {
  res.render("elements", {
    nombre: "Mario Alejandro",
    titulo: "Plantillas con HBS",
});
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/404.html");
});

const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
