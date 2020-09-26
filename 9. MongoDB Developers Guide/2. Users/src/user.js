const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: String,
  postCount: { type: Number, default: 0 },
});

const User = mongoose.model("user", UserSchema);
module.exports = User;
