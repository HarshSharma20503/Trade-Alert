import mongoose from "mongoose";

export const connectDB = async (): Promise<void> => {
  try {
    const connectionInstance = await mongoose.connect(
      process.env.MONGODB_URI as string
    );
    console.log(
      `\n MongoDB connected: ${connectionInstance.connection.host} \n`
    );
  } catch (error) {
    console.log("MongoDB connection error: ", error);
    process.exit(1);
  }
};

export default connectDB;
