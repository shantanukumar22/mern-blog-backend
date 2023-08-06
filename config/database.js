const mongoose = require("mongoose");
//? connec to DB

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://shantanu:6Q1nl1QbElS7RzB7@mern.fbz0h4x.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("database has been connected");
  } catch (error) {
    console.log("Database connection is  failed ", error.message);
  }
};

module.exports = connectDB;
