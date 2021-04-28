const express = require("express");
const app = express();
require("./db/conn");
const { cloudinary } = require("./config/cloudinaryConfig");
const fileUpload = require("express-fileupload");
const bodyParser = require("body-parser");
app.use(express.static("public"));
const userDb = require("./schema");
app.use(express.urlencoded({ limit: "50mb", extended: false }));
app.use(express.json({ limit: "50mb" }));
app.use(fileUpload());
app.get("/get", async (req, res) => {
  const resp = await userDb.findById("6083fd37ed4e3e210c095603");
  console.log(resp.file);
  res.json({
    src: resp.file,
  });
});
app.post("/add", async (req, res) => {
  // console.log(req.body);
  const filestr = req.body.imagedata;
  // const filestr = JSON.parse(req.body);
  // console.log(filestr);
  const uploadedres = await cloudinary.uploader
    .upload(filestr)
    .catch((err) => console.log(err));

  console.log(uploadedres.url);
  // console.log(req.file);
  const addme = await new userDb({
    name: "samiaslam",
    email: "sami@gmail.com",
    file: uploadedres.url,
  });
  const result = await addme.save();
  console.log(result);
  // const pp = req.files.dp;
  // console.log(pp);
  // pp.mv("public/" + pp.name);
  // const addData = await new user({
  //   name: req.body.name,
  //   email: req.body.email,
  //   file: pp.name,
  // });
  // const result = await addData.save();
  res.send(`./public/logo.png`);
});

app.listen(7000, () => {
  console.log("your app is listening on the prt 7000");
});
