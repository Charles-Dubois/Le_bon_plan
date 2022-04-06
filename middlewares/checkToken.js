function checkToken(req, res, next) {
  console.log(req.body);
  next();
}

module.exports = checkToken;
