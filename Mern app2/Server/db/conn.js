const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/details", {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("database connected"))
  .catch(() => console.log("not connected"));
