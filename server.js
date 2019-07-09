const express = require("express");
const app = express();
const mongoose = require("mongoose");
const exphbs = require("express-handlebars");
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars")

// route
app.get("/", (req, res, next) => {
  res.render("home")
})

app.get("/really", (req, res, nexy) => {
  res.render("really");
})

app.listen(PORT, () => {
  console.log("serer is live at localhost" + PORT)
})