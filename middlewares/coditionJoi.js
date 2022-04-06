const loginJoi = require("../Joi/loginJoi");
const adminJoi = require("../Joi/adminJoi");
function login(req, res, next) {
  const validation = loginJoi.validate(req.body);
  if (validation.error) {
    return res.status(400).json({
      message: "error 400 bad request",
      description: validation.error.details[0].message,
    });
  }
  next();
}

function admin(req, res, next) {
  const validation = adminJoi.validate(req.body);
  if (validation.error) {
    return res.status(400).json({
      message: "error 400 bad request",
      description: validation.error.details[0].message,
    });
  }
  next();
}
const conditionJoi = { login, admin };
module.exports = conditionJoi;
