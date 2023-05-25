import { TaskTypeORMRepository } from "../../../repositories/Typeorm/Task.typeorm.repository";
import { UserTypeORMRepository } from "../../../repositories/Typeorm/User.typeorm.repository";
import { CreateTaskController } from "./createTask.controller";

const taskRepository = new TaskTypeORMRepository();
const userRepository = new UserTypeORMRepository();
const createTaskController = new CreateTaskController(
  taskRepository,
  userRepository
);

export default createTaskController;
