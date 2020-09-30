const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");

dotenv.config();

mongoose.Promise = global.Promise;
if (process.env.NODE_ENV !== "test") {
  mongoose.connect("mongodb://localhost/muber", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });
}

app.use(bodyParser.json());
require("./routes/routes")(app);

// Middleware after route
app.use((err, req, res, next) => {
  res.status(422).send({ error: err.message });
});

module.exports = app;
