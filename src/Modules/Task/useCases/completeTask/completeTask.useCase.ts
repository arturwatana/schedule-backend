import { ITaskRepository } from "../../../repositories/ITaskRepository.interface";
import { Task } from "../../entities/Task";

export class CompleteTaskUseCase {
  constructor(private taskRepository: ITaskRepository) {}

  async execute(id: string): Promise<Task> {
    const completedTask = await this.taskRepository.confirmTask(id);
    return completedTask;
  }
}
