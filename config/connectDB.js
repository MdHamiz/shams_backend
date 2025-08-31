const mongoose = require('mongoose');
require('dotenv').config();

if (!process.env.MONGODB_URI) {
    throw new Error("Please provide MONGODB_URI in the .env file");
}

async function connectDB() {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI, {});
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.error("❌ MongoDB connection error:", error);
        process.exit(1);
    }
}

module.exports = connectDB;
