import dotenv from "dotenv";
dotenv.config();
import { AppDataSource } from "./data-source";
import { userRoutes } from "./routes/User.routes";
import express from "express";
import "reflect-metadata";
import { taskRoutes } from "./routes/Task.routes";
import cors from "cors";

const app = express();

AppDataSource.initialize()
  .then(async () => {
    app.use(express.json());
    app.use(cors());
    app.use(userRoutes);
    app.use(taskRoutes);
    app.listen(8080, () => {
      console.log("Listening on port 8080");
    });
  })
  .catch((error) => console.log(error));
