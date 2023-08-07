const mongoose = require("mongoose");
//? connec to DB

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://shan:TIzsvbBjKUYIrxBV@mernblog.snfsqrc.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("database has been connected");
  } catch (error) {
    console.log("Database connection is  failed ", error.message);
  }
};

module.exports = connectDB;
