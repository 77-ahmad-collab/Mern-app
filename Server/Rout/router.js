const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const user = require("../models/user");
require("dotenv").config();
const { signup, login, about } = require("./controller");
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
    next();
  } catch (error) {
    res.send(error, "catch");
  }
};

router.get("/about", authy, about);

module.exports = router;
