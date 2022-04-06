// Dependancies
const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const { engine } = require("express-handlebars");
const app = express();
//Variables
const PORT = 8000;
const { MONGODB_URI } = process.env;
const loginRouter = require("./router/loginRouter");
const cityRouter = require("./router/cityRouter");
const profileRouter = require("./router/profileRouter");
const signupRouter = require("./router/signupRouter");
const adminRouter = require("./router/adminRouter");
//app functions
app.use(express.urlencoded({ extended: true }));
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.use(express.json());
app.use(cookieParser());
//mongoose
mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true })
  .then(console.log("connected to mongo"))
  .catch((err) => console.log(err));
//router
app.use("/login", loginRouter);
app.use("/city", cityRouter);
app.use("/profile", profileRouter);
app.use("/signup", signupRouter);
app.use("/admin", adminRouter);
//path
app.get("/", (_req, res) => {
  res.render("homepage");
});
//error & listen
app.get("*", (_req, res) => {
  res.status(404).json({ message: "error 404 not found" });
});
app.listen(PORT, () => console.log(`on port ${PORT}`));
