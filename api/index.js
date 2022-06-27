const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("DB CONNECT SUCCESSFUL!!"))
  .catch((err) => console.log(err.message));

app.listen(8000, () => {
  console.log("Backend Server is running!");
});
