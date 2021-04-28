const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  file: String,
});
const u = "user";
const user = mongoose.model("user", userSchema, u);
module.exports = user;
