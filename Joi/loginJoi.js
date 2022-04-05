const Joi = require("joi");
const loginJoi = Joi.object({
  name: Joi.string().min(3).max(50).required(),
  password: Joi.string()
    .pattern(new RegExp("^(?=.*[0-9])([a-zA-Zd$@%*+-_!]{6,100})$"))
    .required(),
});
module.exports = loginJoi;
