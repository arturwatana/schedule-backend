import { ITaskRepository } from "../../../repositories/ITaskRepository.interface";
import { Task } from "../../entities/Task";
import _ from "lodash";

export class EditTaskUseCase {
  constructor(private taskRepository: ITaskRepository) {}

  async execute(task: Task, taskId: string): Promise<Task> {
    const updatedTask: Task = {
      ...task,
      name: task.name,
      urgency: task.urgency,
      endDate: task.endDate,
      description: task.description,
    };
    await this.taskRepository.updateTask(updatedTask);

    return updatedTask;
  }
}
