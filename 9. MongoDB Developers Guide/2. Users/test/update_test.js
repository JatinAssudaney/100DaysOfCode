const assert = require("assert");
const User = require("../src/user");

describe("Updation of the records", () => {
  let joe;

  beforeEach(async () => {
    joe = await new User({ name: "Joe", postCount: 0 }).save();
  });

  const assertByName = async (instance) => {
    const user = await User.findById(instance._id);
    assert(user.name === "Alex");
  };

  it("Instance type using set and save", async () => {
    await joe.set("name", "Alex").save();
    assertByName(joe);
  });

  it("Instance type can update", async () => {
    await joe.updateOne({ name: "Alex" });
    assertByName(joe);
  });

  it("Model Class can update", async () => {
    await User.updateMany({ name: "Joe" }, { name: "Alex" });
    assertByName(joe);
  });

  it("Model Class can findOneAndUpdate", async () => {
    await User.findOneAndUpdate({ name: "Joe" }, { name: "Alex" });
    assertByName(joe);
  });

  it("Model Class can findByIdAndUpdate", async () => {
    await User.findByIdAndUpdate(joe._id, { name: "Alex" });
    assertByName(joe);
  });

  it("A user can have their postCount incremented by 1", async () => {
    let increment = 1;
    await User.updateMany({ name: "Joe" }, { $inc: { postCount: increment } });
    const user = await User.findOne({ name: "Joe" });
    assert(user.postCount === increment);
  });
});
