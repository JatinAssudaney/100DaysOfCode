const assert = require("assert");
const User = require("../src/user");

describe("Deleting a user", () => {
  let joe;
  beforeEach(async () => {
    joe = await new User({ name: "Joe" }).save();
  });

  it("Model instance remove", async () => {
    await joe.remove();
    const user = await User.findById(joe._id);
    assert(user === null);
  });

  it("Class method remove", async () => {
    await User.deleteMany({ name: "Joe" });
    const user = await User.findOne({ name: "Joe" });
    assert(user === null);
  });

  it("Class method findOneAndRemove", async () => {
    await User.findOneAndDelete({ name: "Joe" });
    const user = await User.findOne({ name: "Joe" });
    assert(user === null);
  });

  it("Class method findByIdAndRemove", async () => {
    await User.findByIdAndDelete(joe._id);
    const user = await User.findById(joe._id);
    assert(user === null);
  });
});
