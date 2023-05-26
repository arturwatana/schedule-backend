import { Router } from "express";
import createTaskController from "../Modules/Task/useCases/createTask";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticate.middleware";
import findTasksByUserEmailController from "../Modules/Task/useCases/findTasksByUserEmail";

export const taskRoutes = Router();

taskRoutes.post("/tasks", ensureAuthenticated, (req, res) => {
  createTaskController.handle(req, res);
});
taskRoutes.get("/tasks/:email", ensureAuthenticated, (req, res) => {
  findTasksByUserEmailController.handle(req, res);
});
