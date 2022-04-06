const express = require("express");
const router = express.Router();
const Login = require("../models/loginModel");
const checkToken = require("../middlewares/checkToken");
const { admin } = require("../middlewares/coditionJoi");
router.get("/", (req, res) => {
  res.render("admin");
});

router.post("/", checkToken, admin, async (req, res) => {
  res.render("admin");
});

module.exports = router;
