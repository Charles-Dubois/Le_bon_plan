const express = require("express");
const router = express.Router();
const Login = require("../models/loginModel");

const generateToken = require("../middlewares/generateTokenSignup");
const { login } = require("../middlewares/coditionJoi");
router.get("/", (_req, res) => {
  res.render("signup");
});

router.post("/", login, generateToken, async (req, res, next) => {
  const name = req.body.name;

  res.render("profile", { name });
});
module.exports = router;
