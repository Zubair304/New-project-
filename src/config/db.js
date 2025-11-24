const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/taskmanager");
    console.log("✅ MongoDB connected");
  } catch (error) {
    console.error("❌ Database connection failed:", error.message);
    process.exit(1); // Stop the server if DB fails
  }
};

module.exports = connectDB;
