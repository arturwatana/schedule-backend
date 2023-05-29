import { Request, Response } from "express";
import { ITaskRepository } from "../../../repositories/ITaskRepository.interface";
import { CompleteTaskUseCase } from "./completeTask.useCase";

export class CompleteTaskController {
  constructor(private taskRepository: ITaskRepository) {}

  async handle(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const completeTaskUseCase = new CompleteTaskUseCase(this.taskRepository);
      const updatedTask = await completeTaskUseCase.execute(id);
      console.log(updatedTask);
      res.status(200).json(updatedTask);
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  }
}
