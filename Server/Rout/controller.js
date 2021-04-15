const user = require("../models/user");
const bcrypt = require("bcryptjs");

const signup = async (req, res) => {
  try {
    const { name, email, password, cpassword } = req.body;
    const verify_e = await user.findOne({ email: req.body.email });
    // console.log(req.body);

    if (verify_e) {
      return res.send("email exists");
    }
    // console.log(verify_e);
    const addData = await new user({
      name,
      email,
      password,
      cpassword,
    });
    const result = await addData.save();
    console.log(result);
    // console.log(addData.email);
    res.send("this is signup page");
  } catch (error) {
    res.status(400).send("error");
  }
};
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const person = await user.findOne({ email });
    if (!person) {
      return res.status(401).send("invalid ttt");
    }
    const match = await bcrypt.compare(password, person.password);
    // console.log(match);
    if (match) {
      const token = await person.getToken();
      res.cookie("jwt", token, {
        expires: new Date(Date.now + 60000),
      });
      return res.send("you have loged in");
    }
  } catch (error) {
    res.status(401).send("error");
  }
};
module.exports = { signup, login };
