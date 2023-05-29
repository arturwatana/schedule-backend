import { Router } from "express";
import createTaskController from "../Modules/Task/useCases/createTask";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticate.middleware";
import findTasksByUserEmailController from "../Modules/Task/useCases/findTasksByUserEmail";
import editTaskController from "../Modules/Task/useCases/editTask";
import { TaskTypeORMRepository } from "../Modules/repositories/Typeorm/Task.typeorm.repository";
import deleteTaskController from "../Modules/Task/useCases/deleteTask";
import completeTaskController from "../Modules/Task/useCases/completeTask";

export const taskRoutes = Router();
const taskRepository = new TaskTypeORMRepository();

taskRoutes.post("/tasks", ensureAuthenticated, (req, res) => {
  createTaskController.handle(req, res);
});
taskRoutes.get("/tasks/:email", ensureAuthenticated, (req, res) => {
  findTasksByUserEmailController.handle(req, res);
});
taskRoutes.put("/tasks/:id", ensureAuthenticated, (req, res) => {
  editTaskController.handle(req, res);
});
taskRoutes.put("/tasks/:id/completed", ensureAuthenticated, (req, res) => {
  completeTaskController.handle(req, res);
});
taskRoutes.delete("/tasks/:id", ensureAuthenticated, (req, res) => {
  deleteTaskController.handle(req, res);
});
