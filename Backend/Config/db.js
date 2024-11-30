import mongoose from "mongoose";

// connecting to database
export const connectToDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://Viplove:Viplove1109@cluster0.7cn9j.mongodb.net/SampleDb"
    );
    console.log("DB connected");
  } catch (error) {
    console.error("DB connection error:", error);
  }
};