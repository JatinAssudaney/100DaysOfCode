const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost:27017/users_test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

before((done) => {
  mongoose.connection
    .once("open", () => {
      done();
    })
    .on("error", (error) => {
      console.warn("Warning", error);
    });
});

beforeEach((done) => {
  // Will run before each test
  const { users, comments, blogposts } = mongoose.connection.collections;
  users.drop(() => {
    comments.drop(() => {
      blogposts.drop(() => {
        done();
      });
    });
  });
});
