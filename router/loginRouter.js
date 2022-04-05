const express = require("express");
const router = express.Router();
const Login = require("../models/loginModel");
const bcrypt = require("bcrypt");
const { login } = require("../middlewares/coditionJoi");
router.get("/", (req, res) => {
  res.render("login");
});

router.post("/", login, async (req, res, next) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 12);
    await Login.find(req.body);
  } catch (error) {
    console.log(`Error from loginRouter.js ${error}`);
    res.status(400).json({ message: "error 400" });
  }

  res.redirect("/profile");
  next();
});
module.exports = router;
