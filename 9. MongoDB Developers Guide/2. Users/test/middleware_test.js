const mongoose = require("mongoose");
const assert = require("assert");
const User = require("../src/user");
const BlogPost = require("../src/blogPost");

describe("Middleware", () => {
  let joe, blogPost;
  beforeEach(async () => {
    joe = new User({ name: "Joe" });
    blogPost = new BlogPost({
      title: "JS is Great",
      content: "Yup it is really great",
    });

    joe.blogPosts.push(blogPost);

    await Promise.all([joe.save(), blogPost.save()]);
  });

  it("Users clean up dangling blogposts on delete", async () => {
    await joe.remove();
    const count = await BlogPost.countDocuments();
    assert(count === 0);
  });
});
