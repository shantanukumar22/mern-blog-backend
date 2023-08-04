const mongoose = require("mongoose");

//? schema for post (space)

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: "",
    required: true,
  },
});
