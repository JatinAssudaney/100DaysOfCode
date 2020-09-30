const Driver = require("../models/driver");

module.exports = {
  greeting(req, res) {
    res.send({ hi: "there" });
  },

  async index(req, res, next) {
    try {
      const { lng, lat } = req.query;
      const drivers = await Driver.aggregate([
        {
          $geoNear: {
            near: {
              type: "Point",
              coordinates: [parseFloat(lng), parseFloat(lat)],
            },
            distanceField: "dist.calculated",
            maxDistance: 100000,
            spherical: true,
          },
        },
      ]);
      res.send(drivers);
    } catch (error) {
      next(error);
    }
  },

  async create(req, res, next) {
    try {
      const driverProps = req.body;
      const driver = await Driver.create(driverProps);
      res.send(driver);
    } catch (error) {
      next(error);
    }
  },

  async edit(req, res, next) {
    try {
      const driverId = req.params.id;
      const driverProps = req.body;
      const driver = await Driver.findByIdAndUpdate(
        { _id: driverId },
        driverProps,
        { new: true }
      );
      res.send(driver);
    } catch (error) {
      next(error);
    }
  },

  async delete(req, res, next) {
    try {
      const driverId = req.params.id;
      const driver = await Driver.findByIdAndDelete({ _id: driverId });
      res.status(204).send(driver);
    } catch (error) {
      next(error);
    }
  },
};
