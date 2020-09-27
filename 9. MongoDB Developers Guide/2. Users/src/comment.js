const mongoose = require("mongoose");
const { Schema } = mongoose;

const CommentSchema = {
  content: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
};

const Comment = mongoose.model("comment", CommentSchema);
module.exports = Comment;
