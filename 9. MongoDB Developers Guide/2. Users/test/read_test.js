const assert = require("assert");
const User = require("../src/user");

describe("Reading users out of the database", () => {
  let joe;

  beforeEach(async () => {
    joe = await new User({ name: "Joe" }).save();
  });

  it("Finds All users with a name of joe", async () => {
    const users = await User.find({ name: "Joe" });
    assert(users[0]._id.toString() === joe._id.toString());
  });

  it("Finds a user with a particular id", async () => {
    const user = await User.findById(joe._id);
    assert(user.name === "Joe");
  });
});
