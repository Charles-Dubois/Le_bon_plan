const express = require("express");
const router = express.Router();
router.get("/auth", (_req, res) => {
  res.render("auth");
});

module.exports = router;
