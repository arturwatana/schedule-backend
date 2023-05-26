import { TaskTypeORMRepository } from "../../../repositories/Typeorm/Task.typeorm.repository";
import { FindTasksByUserEmailController } from "./findTasksByUserEmail.controller";

const taskRepository = new TaskTypeORMRepository();
const findTasksByUserEmailController = new FindTasksByUserEmailController(
  taskRepository
);

export default findTasksByUserEmailController;
