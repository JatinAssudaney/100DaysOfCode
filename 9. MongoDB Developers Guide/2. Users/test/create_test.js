const assert = require("assert");
const User = require("../src/user");

describe("Creating records", () => {
  it("Saves a user", async () => {
    const joe = await new User({ name: "Joe" }).save();
    assert(!joe.isNew);
  });
});
