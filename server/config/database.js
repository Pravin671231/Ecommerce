const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    const uri = process.env.DB_LOCAL_URI;
    if (!uri) {
      throw new Error(
        "Missing MongoDB URI in environment variables (DB_LOCAL_URI)"
      );
    }
    await mongoose.connect(uri);
    console.log(`MongoDB connected :${mongoose.connection.host}`);
  } catch (err) {
    console.error(`MongoDB connection error: ${err.message} `);
  }
};

module.exports = connectDatabase;
