const jwt = require("jsonwebtoken");
const { SECRET } = process.env;
const Login = require("../models/loginModel");
const bcrypt = require("bcrypt");

async function signupToken(req, res, next) {
  let result;
  try {
    req.body.password = await bcrypt.hash(req.body.password, 12);
    result = await Login.create(req.body);
  } catch (error) {
    console.log(`Error from /middlewares/generateToken.js in signupToken`);
    console.error(error);
    console.log(`Error from /middlewares/generateToken.js in signupToken`);
    return res.status(400).json({ message: "This name is not availaible" });
  }
  const token = jwt.sign(
    {
      data: "leBonPlan",
      id: result.id,
    },
    SECRET
  );
  res.cookie("lebonplan", token, { httpOnly: true, secure: false });
  next();
}

async function loginToken(req, res, next) {
  const errorMessage = "Name or password not valid";
  let result;
  try {
    req.body.password = await bcrypt.hash(req.body.password, 12);
    result = await Login.find({ name: req.body.name });

    if (result.length === 0) {
      return res.json({ message: `The name ${req.body.name} is not valid` });
    }
    const ckeckPassword = await bcrypt.compare(
      { password: req.body.password },
      result.password
    );
    if (!ckeckPassword) {
      return res.json(errorMessage);
    }
  } catch (error) {
    console.log(`Error from /middlewares/generateToken.js in loginToken`);
    console.error(error);
    console.log(`Error from /middlewares/generateToken.js in loginToken`);
    return res.status(400).json({ message: "Name is not valid" });
  }
  const token = jwt.sign(
    {
      data: "leBonPlan",
      id: result.id,
    },
    SECRET
  );
  res.cookie("lebonplan", token, { httpOnly: true, secure: false });
  next();
}

const generateToken = { signupToken, loginToken };
module.exports = generateToken;
