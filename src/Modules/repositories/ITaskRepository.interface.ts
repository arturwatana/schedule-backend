import { Task } from "../Task/entities/Task";

export interface ITaskRepository {
  save(data: Task): Promise<Task>;
  findAllByUserEmail(userEmail: string): Promise<Task[]>;
  updateTask(task: Task): Promise<void>;
  findTaskById(id: string): Promise<Task>;
  deleteTask(id: string): Promise<void>;
  confirmTask(id: string): Promise<Task>;
}
