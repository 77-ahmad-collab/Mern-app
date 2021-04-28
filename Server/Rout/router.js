const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const user = require("../models/user");
require("dotenv").config();
const {
  signup,
  login,
  about,
  contact,
  home,
  getContact,
} = require("./controller");
router.post("/signup", signup);

router.post("/login", login);

const authy = async (req, res, next) => {
  try {
    const verifyuser = await jwt.verify(req.cookies.jwt, process.env.SECRET);
    const mainuser = await user.findOne({
      _id: verifyuser.id,
      "tokens.token": req.cookies.jwt,
    });
    if (!mainuser) {
      res.status(400).send("homepagedikhao");
    }
    console.log(verifyuser, mainuser);
    req.mainuser = mainuser;
    req.name = mainuser.name;
    next();
  } catch (error) {
    res.status(400).send(error);
  }
};

router.get("/about", authy, about);

router.get("/home", home);

const middle = async (req, res, next) => {
  const verify = await jwt.verify(req.cookies.jwt, process.env.SECRET);
  const mainuser = await user.findOne({
    _id: verify.id,
    "tokens.token": req.cookies.jwt,
  });
  if (!mainuser) {
    res.status(400).send("notlogedin");
  }
  req.mainuser = mainuser;
  next();
};

router.get("/contact", middle, contact);

router.post("/contact", authy, getContact);
module.exports = router;
