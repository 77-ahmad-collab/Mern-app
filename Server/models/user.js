const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv").config();
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  cpassword: String,
  tokens: [
    {
      token: String,
    },
  ],
  messages: [
    {
      name: String,
      email: String,
      message: String,
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

const u = "user";

userSchema.pre("save", async function () {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
    this.cpassword = await bcrypt.hash(this.cpassword, 10);
  }
});
userSchema.methods.addData = async function (name, email, message) {
  try {
    console.log("run");
    this.messages = this.messages.concat({ name, email, message });
    this.save();
  } catch (error) {
    console.log(error);
  }
};
userSchema.methods.getToken = async function () {
  try {
    const tok = jwt.sign({ id: this.id }, process.env.SECRET);
    // console.log(tok);
    this.tokens = this.tokens.concat({ token: tok });
    this.save();
    return tok;
  } catch (error) {
    console.log(error);
  }
};

const user = mongoose.model("user", userSchema, u);
module.exports = user;
