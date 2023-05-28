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
  async findAllByUserEmail(userEmail: string): Promise<Task[]> {
    const userTasks = await this.taskRepository.find({
      where: {
        userEmail: userEmail,
      },
    });
    return userTasks;
  }
  async updateTask(task: Task): Promise<void> {
    await this.taskRepository
      .createQueryBuilder()
      .update(TypeORMTask)
      .set({
        name: task.name,
        urgency: task.urgency,
        endDate: task.endDate,
      })
      .where({
        id: task.id,
      })
      .execute();
  }
  async findTaskById(id: string): Promise<Task> {
    const taskInDB = await this.taskRepository.find({
      where: {
        id,
      },
    });
    if (!taskInDB) {
      throw new Error("Task not found");
    }

    return taskInDB[0];
  }
  async deleteTask(id: string): Promise<void> {
    await this.taskRepository
      .createQueryBuilder()
      .delete()
      .from(TypeORMTask)
      .where({
        id,
      })
      .execute();
  }
}
