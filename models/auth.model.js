const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchem = new Schema(
  {
    username: {
      type: String,
      trim: true,
      unique: [true, "username already exists in database!"],
      index: { unique: true },
      required: "Username is required",
      text: true,
    },
    email: {
      type: String,
      unique: [true, "email already exists in database!"],
      lowercase: true,
      trim: true,
      required: [true, "email not provided"],
      validate: {
        validator: function (v) {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
        },
        message: "{VALUE} is not a valid email!",
      },
    },
    password: {
      type: String,
      trim: true,
      required: true,
    },
  },
  { timestamps: true }
);

const User = new mongoose.model("User", userSchem);

module.exports = { User };
