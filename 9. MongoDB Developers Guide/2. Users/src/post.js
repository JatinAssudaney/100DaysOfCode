const mongoose = require("mongoose");
const { Schema } = mongoose;

const PostSchema = new Schema({
  title: String,
});

module.exports = PostSchema;
