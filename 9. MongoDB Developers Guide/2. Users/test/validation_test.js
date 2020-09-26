const assert = require("assert");
const User = require("../src/user");

describe("Validating records", () => {
  it("Requires a user's name", () => {
    const user = new User({ name: undefined });
    const validationResult = user.validateSync();
    const { message } = validationResult.errors.name;
    assert(message === "Name is required.");
  });

  it("Requires a user's name longer than 2 characters", () => {
    const user = new User({ name: "Al" });
    const validationResult = user.validateSync();
    const { message } = validationResult.errors.name;
    assert(message === "Name must be longer than 2 characters");
  });

  it("Disallows invalid records from being saved", async () => {
    try {
      const user = await new User({ name: "Al" }).save();
    } catch (validationResult) {
      const { message } = validationResult.errors.name;
      assert(message === "Name must be longer than 2 characters");
    }
  });
});
