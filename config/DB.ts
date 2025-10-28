import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config(); 

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb');
    console.log('✅ MongoDB Connected');
  } catch (err: any) {
    console.error('❌ Database connection failed:', err.message);
    process.exit(1); 
  }
};

connectDB();