const express = require("express");
const router = express.Router();
const Login = require("../models/loginModel");
const { login } = require("../middlewares/coditionJoi");
router.get("/", (req, res) => {
  res.render("login");
});

router.post("/", login, async (req, res, next) => {
  let result;
  try {
    result = await Login.create(req.body);
  } catch (error) {
    console.log(`Error from loginRouter.js ${error}`);
    res.status(400).json({ message: "error 400" });
  }

  res.redirect("/profile");
});
module.exports = router;
