import { ITaskRepository } from "../../../repositories/ITaskRepository.interface";
import { IUserRepository } from "../../../repositories/IUserRepository.interface";
import { Task } from "../../entities/Task";
import { ITask } from "../../entities/interfaces/ITask.interface";

export class CreateTaskUseCase {
  constructor(
    private taskRepository: ITaskRepository,
    private userRepository: IUserRepository
  ) {}
  async execute(data: ITask): Promise<Task> {
    const user = await this.userRepository.findByEmail(data.userEmail);
    if (!user) {
      throw new Error("Ops, user nao foi encontrado");
    }
    const task = Task.create(data);
    const savedTaskInDB = await this.taskRepository.save(task);
    return savedTaskInDB;
  }
}
