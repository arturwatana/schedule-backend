import { ITask } from "../../Task/entities/interfaces/ITask.interface";
import { Task } from "../../Task/entities/Task";
import { ITaskRepository } from "../ITaskRepository.interface";
import { Task as TypeORMTask } from "../../../TypeORM/entities/Task";
import { AppDataSource } from "../../../data-source";

export class TaskTypeORMRepository implements ITaskRepository {
  taskRepository = AppDataSource.getRepository(TypeORMTask);
  async save(data: Task): Promise<Task> {
    const createdTask = await this.taskRepository.save(data);
    return createdTask;
  }
}
