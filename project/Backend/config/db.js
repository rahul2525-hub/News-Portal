import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

console.log("URLDB =", process.env.URLDB);

export const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.URLDB);
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.error("MongoDB Connection Error:", error.message);
  }
};