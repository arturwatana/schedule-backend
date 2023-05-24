import { AppDataSource } from "./data-source";
import { userRoutes } from "./routes/User.routes";
import express from "express";
import "reflect-metadata";

const app = express();

AppDataSource.initialize()
  .then(async () => {
    app.use(express.json());
    app.use(userRoutes);
    app.listen(8080, () => {
      console.log("Listening on port 8080");
    });
  })
  .catch((error) => console.log(error));
