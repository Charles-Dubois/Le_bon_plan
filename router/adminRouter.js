const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const upload = multer({ dest: "public" });
const router = express.Router();
const Login = require("../models/loginModel");
const checkToken = require("../middlewares/checkToken");
const { admin } = require("../middlewares/coditionJoi");

router.get("/", (req, res) => {
  res.render("admin");
});

router.post("/", checkToken, admin, async (req, res) => {
  fs.renameSync(
    req.file.path,
    path.join(req.file.destination, req.file.originalname)
  );

  res.send("recu");
});

module.exports = router;
