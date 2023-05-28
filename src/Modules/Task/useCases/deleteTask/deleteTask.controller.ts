import { Request, Response } from "express";
import { ITaskRepository } from "../../../repositories/ITaskRepository.interface";
import { DeleteTaskUseCase } from "./deleteTask.useCase";

export class DeleteTaskController {
  constructor(private taskRepository: ITaskRepository) {}

  async handle(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deleteTaskUseCase = new DeleteTaskUseCase(this.taskRepository);
      await deleteTaskUseCase.execute(id);
      res.status(200);
    } catch (err: any) {
      res.status(400);
    }
  }
}
