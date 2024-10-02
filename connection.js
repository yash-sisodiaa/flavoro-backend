const mongoose = require('mongoose');
require("dotenv").config(); // Load environment variables from .env file

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
       useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
      family: 4 
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
    return error.message;
  }
};

module.exports = { connectDb };
