import { TaskTypeORMRepository } from "../../../repositories/Typeorm/Task.typeorm.repository";
import { DeleteTaskController } from "./deleteTask.controller";

const taskRepository = new TaskTypeORMRepository();

const deleteTaskController = new DeleteTaskController(taskRepository);

export default deleteTaskController;
