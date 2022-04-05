const mongoose = require("mongoose");

const loginSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 100,
    minlength: 3,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    maxlength: 100,
    minlength: 3,
  },
});
const Login = mongoose.model("users", loginSchema);
module.exports = Login;
