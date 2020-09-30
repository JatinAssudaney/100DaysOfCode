const mongoose = require("mongoose");

before((done) => {
  mongoose.connect("mongodb://localhost/muber_test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });
  mongoose.connection
    .once("open", () => done())
    .on("error", (error) => {
      console.warn("Warning", error);
    });
});

beforeEach((done) => {
  // Will run before each test
  const { drivers } = mongoose.connection.collections;
  drivers
    .drop()
    .then(() => drivers.createIndex({ "geometry.coordinates": "2dsphere" }))
    .then(() => done())
    .catch(() => done());
});
