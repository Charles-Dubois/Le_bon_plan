const express = require("express");
const router = express.Router();
const Login = require("../models/loginModel");
const bcrypt = require("bcrypt");
const { login } = require("../middlewares/coditionJoi");
router.get("/", (req, res) => {
  res.render("login");
});

router.post("/", login, async (req, res, next) => {
  console.log(req.cookies);
  next();
});
module.exports = router;
