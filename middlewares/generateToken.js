const jwt = require("jsonwebtoken");
const { SECRET } = process.env;
const Login = require("../models/loginModel");
const bcrypt = require("bcrypt");

async function signupToken(req, res, next) {
  let result, name, ID;
  try {
    req.body.password = await bcrypt.hash(req.body.password, 12);
    result = await Login.create(req.body);
    ID = result.id;
    name = req.body.name;
  } catch (error) {
    console.log(`Error from /middlewares/generateToken.js`);
    console.error(error);
    console.log(`Error from /middlewares/generateToken.js`);
    return res.status(400).json({ message: "This name is not availaible" });
  }

  const token = jwt.sign(
    {
      data: "leBonPlan",
      id: result.id,
    },
    SECRET
  );

  res.cookie("leBonPlan", token, { httpOnly: true, secure: false });

  next();
}

const generateToken = { signupToken };
module.exports = generateToken;
