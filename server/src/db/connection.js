import chalk from "chalk";
import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `mongodb://localhost:27017/backendPackages`,
    );
    console.log(
      chalk.yellow(`MongoDB Hostname: ${connectionInstance.connection.host}`),
    );
  } catch (error) {
    console.log(chalk.red(`MongoDB Connection Error`));
    throw error;
  }
};
