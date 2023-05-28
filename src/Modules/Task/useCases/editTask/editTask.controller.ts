import { Request, Response } from "express";
import { ITaskRepository } from "../../../repositories/ITaskRepository.interface";
import { EditTaskUseCase } from "./editTask.useCase";

export class EditTaskController {
  constructor(private taskRepository: ITaskRepository) {}

  async handle(req: Request, res: Response) {
    try {
      const task = req.body;
      const { id } = req.params;
      const editTaskUseCase = new EditTaskUseCase(this.taskRepository);
      const updatedTask = await editTaskUseCase.execute(task, id);
      res.status(200).json(updatedTask);
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  }
}
