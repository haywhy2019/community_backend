const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();

const uri = process.env.MONGO_URI;

const loginRoutes = require("./routes/login");
const testRoutes = require("./routes/test");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(loginRoutes);
app.use(testRoutes);

app.use("/", (req, res) => {
  res.send("not found");
});

const port = process.env.PORT || 5000;
mongoose
  .connect(uri)
  .then((result) => {
    app.listen(port, () => console.log(`running on port ${port}`));
  })
  .catch((err) => {
    console.log(err, "an err occured");
  });
