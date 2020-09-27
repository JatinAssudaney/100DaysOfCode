const assert = require("assert");
const BlogPost = require("../src/blogPost");
const Comment = require("../src/comment");
const User = require("../src/user");

describe("Associations", () => {
  let joe, blogPost, comment;
  beforeEach(async () => {
    joe = new User({ name: "Joe" });
    blogPost = new BlogPost({
      title: "JS is Great",
      content: "Yup it is really great",
    });
    comment = new Comment({
      content: "Congrats on great post",
    });

    joe.blogPosts.push(blogPost);
    blogPost.comments.push(comment);
    comment.user = joe;

    await Promise.all([joe.save(), blogPost.save(), comment.save()]);
  });

  it("Saves a relation between a user and a blogpost", async () => {
    const user = await User.findOne({ name: "Joe" }).populate("blogPosts");
    assert(user.blogPosts[0].title === "JS is Great");
  });

  it("Saves a full relation graph", async () => {
    const user = await User.findOne({ name: "Joe" }).populate({
      path: "blogPosts",
      populate: {
        path: "comments",
        model: "comment",
      },
    });

    const { name } = user;
    const { title } = user.blogPosts[0];
    const { comments } = user.blogPosts[0];
    assert(name === "Joe");
    assert(title === "JS is Great");
    assert(comments[0].content === "Congrats on great post");
  });
});
