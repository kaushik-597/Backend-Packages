import dotenv from "dotenv";
dotenv.config();
import { app } from "./app.js";
import chalk from "chalk";
import { connectDB } from "./db/connection.js";
const port = process.env.PORT || 4000;

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(
        chalk.blue(`Server is listening to http://localhost:${port}`),
      );
    });
  })
  .catch((err) => {
    console.log(chalk.red(`MongoDB couldn't connect: ${err.message}`));
  });
