import { Router } from "express";
import createTaskController from "../Modules/Task/useCases/createTask";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticate.middleware";
import findTasksByUserEmailController from "../Modules/Task/useCases/findTasksByUserEmail";
import editTaskController from "../Modules/Task/useCases/editTask";
import { TaskTypeORMRepository } from "../Modules/repositories/Typeorm/Task.typeorm.repository";
import deleteTaskController from "../Modules/Task/useCases/deleteTask";

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
taskRoutes.get("/tasks/:id", ensureAuthenticated, async (req, res) => {
  const { id } = req.params;
  const taskInDb = await taskRepository.findTaskById(id);
  if (taskInDb) {
    res.status(200).json(taskInDb);
  }
  res.status(400).json({ message: "Task not found" });
});

taskRoutes.delete("/tasks/:id", ensureAuthenticated, (req, res) => {
  deleteTaskController.handle(req, res);
});
