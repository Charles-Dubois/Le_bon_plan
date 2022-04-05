const express = require("express");
const router = express.Router();

router.get("/products", (_req, res) => {
  res.render("products");
});

module.exports = router;
