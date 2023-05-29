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
        description: task.description,
      })
      .where({
        id: task.id,
      })
      .execute();
  }

  async confirmTask(id: string) {
    const task = await this.taskRepository.findOne({
      where: {
        id,
      },
    });
    if (!task) {
      throw new Error("Task not found");
    }
    if (task.completed === "Concluida") {
      throw new Error("Task already completed");
    }
    task.completed = "Concluida";
    await this.taskRepository
      .createQueryBuilder()
      .update(TypeORMTask)
      .set(task)
      .where({
        id,
      })
      .execute();

    return task;
  }
  async findTaskById(id: string): Promise<Task> {
    const taskInDB = await this.taskRepository.findOne({
      where: {
        id,
      },
    });
    if (!taskInDB) {
      throw new Error("Task not found");
    }

    return taskInDB;
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
