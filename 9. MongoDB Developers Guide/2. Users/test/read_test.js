const assert = require("assert");
const User = require("../src/user");

describe("Reading users out of the database", () => {
  let joe, maria, alex, zach;

  beforeEach(async () => {
    joe = new User({ name: "Joe" });
    alex = new User({ name: "Alex" });
    maria = new User({ name: "Maria" });
    zach = new User({ name: "Zach" });

    await Promise.all([joe.save(), alex.save(), maria.save(), zach.save()]);
  });

  it("Finds All users with a name of joe", async () => {
    const users = await User.find({ name: "Joe" });
    assert(users[0]._id.toString() === joe._id.toString());
  });

  it("Finds a user with a particular id", async () => {
    const user = await User.findById(joe._id);
    assert(user.name === "Joe");
  });

  it("Can skip and limit the result set for Pagination", async () => {
    const users = await User.find({}).sort({ name: 1 }).skip(1).limit(2);
    assert(users.length == 2);
    assert(users[0].name === "Joe");
    assert(users[1].name === "Maria");
  });
});
