const mongoose = require("mongoose");
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
  postCount: { type: Number, default: 0 },
});

const User = mongoose.model("user", UserSchema);
module.exports = User;
