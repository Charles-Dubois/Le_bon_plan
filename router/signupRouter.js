const express = require("express");
const router = express.Router();
const Login = require("../models/loginModel");

const { signupToken } = require("../middlewares/generateToken");
const { login } = require("../middlewares/coditionJoi");
router.get("/", (_req, res) => {
  res.render("signup");
});

router.post("/", login, signupToken, async (req, res, next) => {
  const name = req.body.name;

  res.render("profile", { name });
});
module.exports = router;
