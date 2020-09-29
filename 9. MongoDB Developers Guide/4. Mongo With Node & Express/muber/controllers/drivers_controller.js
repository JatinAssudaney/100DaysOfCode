const Driver = require("../models/driver");

module.exports = {
  greeting(req, res) {
    res.send({ hi: "there" });
  },

  async create(req, res) {
    try {
      const driverProps = req.body;
      const driver = await Driver.create(driverProps);
      res.send(driver);
    } catch (error) {
      res.send(error);
    }
  },
};
