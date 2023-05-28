import { TaskTypeORMRepository } from "../../../repositories/Typeorm/Task.typeorm.repository";
import { EditTaskController } from "./editTask.controller";

const taskRepository = new TaskTypeORMRepository();
const editTaskController = new EditTaskController(taskRepository);

export default editTaskController;
