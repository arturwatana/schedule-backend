import { Task } from "../Task/entities/Task";

export interface ITaskRepository {
  save(data: Task): Promise<Task>;
  findAllByUserEmail(userEmail: string): Promise<Task[]>;
}
