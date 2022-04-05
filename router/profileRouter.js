const express = require("express");
const router = express.Router();
const Login = require("../models/loginModel");
router.get("/", (req, res) => {
  res.render("profile");
});

module.exports = router;
