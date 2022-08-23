import mongoose from "mongoose";

const connectDB = async (DATABASE_URL) => {
  try {
    const DB_OPTIONS = {
      dbName: "TeamXtreme",
    };

    await mongoose.connect(DATABASE_URL, DB_OPTIONS);
    console.log("connection established with mongodb database...");
  } catch (error) {
    console.log(error.message);
  }
};
export default connectDB;
