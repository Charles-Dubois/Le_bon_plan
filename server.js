const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const { engine } = require("express-handlebars");
const app = express();
const PORT = 8000;
const { MONGODB_URI } = process.env;
const loginRouter = require("./router/loginRouter");
const cityRouter = require("./router/cityRouter");
const authRouter = require("./router/authRouter");
const productsRouter = require("./router/productsRouter");
const indexRouter = require("./router/indexRouter");
app.use(express.urlencoded({ extended: true }));
app.engine("handlebars", engine());
app.set("view engine", "handlebars");

mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true })
  .then(console.log("connected to mongo"))
  .catch((err) => console.log(err));

app.use("/login", loginRouter);
app.use("/city", cityRouter);
app.use("/auth", authRouter);
app.use("/products", productsRouter);
app.use("/index", indexRouter);

app.get("/", (_req, res) => {
  res.render("homepage");
});

app.get("*", (_req, res) => {
  res.status(404).json({ message: "error 404 not found" });
});
app.listen(PORT, () => console.log(`on port ${PORT}`));
