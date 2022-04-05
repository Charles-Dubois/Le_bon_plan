const express = require("express");
const { engine } = require("express-handlebars");
const app = express();
const PORT = 8000;
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.get("/", (_req, res) => {
  res.send("hello world");
});

app.get("/auth", (_req, res) => {
  res.render("auth");
});
app.get("/products", (_req, res) => {
  res.render("products");
});
app.get("*", (_req, res) => {
  res.status(404).json({ message: "error 404 not found" });
});
app.listen(PORT, () => console.log(`on port ${PORT}`));
