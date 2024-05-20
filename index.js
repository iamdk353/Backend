import express from "express";
import "dotenv/config";
import mainRouter from "./router.js";
import chalk from "chalk";
import mongoose from "mongoose";

import dashboard from "./controllers/dashboard.js";
import verifyUser from "./middlewares/verifyUser.js";
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/v1/", mainRouter);
app.get("/dashboard", verifyUser, dashboard);
mongoose
  .connect("mongodb://localhost:27017")
  .then(() => {
    app.listen(port, () => {
      console.log(
        chalk.bold.bgBlack.cyanBright(
          "server started\n connected to DB \n  http://localhost:" + port
        )
      );
    });
  })
  .catch((err) => {
    console.log(chalk.bold.bgBlack.redBright("error in connection" + err));
  });
