const mongoose = require("mongoose");
const PostSchema = require("./post");

const { Schema } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    validate: {
      validator: (name) => name.length > 2,
      message: "Name must be longer than 2 characters",
    },
    required: [true, "Name is required."],
  },
  posts: [PostSchema], // Just for subdocument knowledge
  likes: { type: Number, default: 0 },
  blogPosts: [
    {
      type: Schema.Types.ObjectId,
      ref: "blogPost",
    },
  ],
});

UserSchema.virtual("postCount").get(function () {
  return this.posts.length;
});

UserSchema.pre("remove", async function (next) {
  const BlogPost = mongoose.model("blogPost");
  await BlogPost.deleteMany({ _id: { $in: this.blogPosts } });
  next();
});

const User = mongoose.model("user", UserSchema);
module.exports = User;
