const user = require("../models/user");
const bcrypt = require("bcryptjs");

const signup = async (req, res) => {
  try {
    const { name, email, password, cpassword } = req.body;
    const verify_e = await user.findOne({ email: req.body.email });
    // console.log(req.body);

    if (verify_e) {
      return res.status(409).send("email exists");
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
      return res.status(404).send("invalid ttt");
    }
    const match = await bcrypt.compare(password, person.password);
    // console.log(match);
    if (match) {
      const token = await person.getToken();
      res.cookie("jwt", token, {
        expires: new Date(Date.now + 10000),
      });
      return res.send("you have loged in");
    } else {
      return res.status(401).send("invalid hay bjais");
    }
  } catch (error) {
    res.status(401).send("error");
  }
};

const about = async (req, res) => {
  try {
    res.send(req.mainuser);
  } catch (error) {
    res.send(error);
  }
};

const contact = async (req, res) => {
  try {
    res.send(req.mainuser);
  } catch (error) {
    res.send(error);
  }
};
const home = async (req, res) => {
  res.send(req.name);
};

const getContact = async (req, res) => {
  const findeme = await user.findOne({ email: req.body.email });
  const { name, email, message } = req.body;
  console.log(findeme);
  findeme.addData(name, email, message);

  res.send("data posted sucessfully");
};
module.exports = { signup, login, about, contact, home, getContact };
