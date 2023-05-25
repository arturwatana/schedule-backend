import { Router } from "express";
import createTaskController from "../Modules/Task/useCases/createTask";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticate.middleware";

export const taskRoutes = Router();

taskRoutes.post("/tasks", ensureAuthenticated, (req, res) => {
  createTaskController.handle(req, res);
});
