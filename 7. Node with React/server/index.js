const express = require("express");

const app = express();

// Route Handler
app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

app.listen(5000);
