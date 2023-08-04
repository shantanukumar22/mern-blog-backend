const mongoose = require("mongoose");

//? schema for post (space)

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    author: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    shares: {
      type: Number,
      default: 0,
    },

    posts: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },

    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: comments,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Category = mongoose.model("Category", categorySchema);
module.exports = Category;
