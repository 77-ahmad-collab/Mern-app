const express = require("express");
const app = express();
require("./db/conn");
const router = require("./Rout/router");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", router);

app.listen(5000, () => {
  console.log("app is listening");
});
