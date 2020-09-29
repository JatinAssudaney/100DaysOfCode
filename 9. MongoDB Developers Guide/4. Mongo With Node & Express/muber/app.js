const express = require("express");
const app = express();

require("./routes/routes")(app);

module.exports = app;
