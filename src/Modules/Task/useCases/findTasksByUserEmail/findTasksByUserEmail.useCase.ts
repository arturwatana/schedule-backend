import { ITaskRepository } from "../../../repositories/ITaskRepository.interface";

export class FindTasksByUserEmailUseCase {
  constructor(private taskRepository: ITaskRepository) {}

  async execute(userEmail: string) {
    const tasks = await this.taskRepository.findAllByUserEmail(userEmail);
    return tasks;
  }
}
