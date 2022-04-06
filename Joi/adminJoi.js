const Joi = require("joi");
const adminJoi = Joi.object({
  product: Joi.string().min(3).max(50).required(),
  description: Joi.string().max(300),
  price: Joi.string().pattern(new RegExp("^[0-9]$")).required(),
  picture: Joi.string(),
});
module.exports = adminJoi;
