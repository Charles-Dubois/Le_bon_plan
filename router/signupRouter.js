const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const Login = require("../models/loginModel");
const bcrypt = require("bcrypt");
const { login } = require("../middlewares/coditionJoi");
router.get("/", (_req, res) => {
  res.render("signup");
});

router.post("/", login, async (req, res, next) => {
  let result;
  try {
    req.body.password = await bcrypt.hash(req.body.password, 12);
    result = await Login.create(req.body);
  } catch (error) {
    console.log(`Error from loginRouter.js ${error}`);
    return res.status(400).json({ message: "error 400" });
  }

  const token = jwt.sign({
    data: "le_bon_plan",
    id: result.id,
  });
  res.cookie(token);
  res.redirect("/profile");
  next();
});
module.exports = router;
