const assert = require("assert");
const User = require("../src/user");

describe("Subdocuments", () => {
  it("Can create a subdocument", async () => {
    const joe = await new User({
      name: "Joe",
      posts: [{ title: "PostTitle" }],
    }).save();

    const user = await User.findOne({ name: "Joe" });
    assert(user.posts[0].title === "PostTitle");
  });

  it("Adding subdocuments to an existing record", async () => {
    const joe = await new User({
      name: "Joe",
      posts: [],
    }).save();
    const user = await User.findOne({ name: "Joe" });
    user.posts.push({ title: "New Post" });
    await user.save();
    const newUser = await User.findOne({ name: "Joe" });
    assert(newUser.posts[0].title === "New Post");
  });

  it("Removing an existing subdocuments", async () => {
    const joe = await new User({
      name: "Joe",
      posts: [{ title: "New Title" }],
    }).save();
    const user = await User.findOne({ name: "Joe" });
    const post = user.posts[0];
    post.remove();
    await user.save();
    const newUser = await User.findOne({ name: "Joe" });
    assert(newUser.posts.length === 0);
  });
});
