import dotenv from "dotenv";
dotenv.config();
import { app } from "./app.js";
import chalk from "chalk";
const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(chalk.blue(`Server is listening to http://localhost:${port}`));
});
