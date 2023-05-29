import { TaskTypeORMRepository } from "../../../repositories/Typeorm/Task.typeorm.repository";
import { CompleteTaskController } from "./completeTask.controller";

const taskRepository = new TaskTypeORMRepository();

const completeTaskController = new CompleteTaskController(taskRepository);

export default completeTaskController;
