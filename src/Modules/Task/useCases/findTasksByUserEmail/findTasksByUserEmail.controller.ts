import { Request, Response } from "express";
import { FindTasksByUserEmailUseCase } from "./findTasksByUserEmail.useCase";
import { ITaskRepository } from "../../../repositories/ITaskRepository.interface";

export class FindTasksByUserEmailController {
  constructor(private taskRepository: ITaskRepository) {}
  async handle(req: Request, res: Response) {
    try {
      const { userEmail } = req.params;
      const findTasksByUserEmailUseCase = new FindTasksByUserEmailUseCase(
        this.taskRepository
      );
      const userTasks = await findTasksByUserEmailUseCase.execute(userEmail);
      res.status(200).json(userTasks);
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  }
}
