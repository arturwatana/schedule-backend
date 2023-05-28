import { ITaskRepository } from "../../../repositories/ITaskRepository.interface";

export class DeleteTaskUseCase {
  constructor(private taskRepository: ITaskRepository) {}

  async execute(id: string) {
    await this.taskRepository.deleteTask(id);
  }
}
