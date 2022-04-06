const express = require("express");
const router = express.Router();
const Login = require("../models/loginModel");
const bcrypt = require("bcrypt");
const { login } = require("../middlewares/coditionJoi");
const { loginToken } = require("../middlewares/generateToken");
router.get("/", (req, res) => {
  res.render("login");
});

router.post("/", login, loginToken, async (req, res, next) => {
  const name = req.body.name;

  res.render("profile", { name });
});
module.exports = router;
