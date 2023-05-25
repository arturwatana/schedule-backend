import { Request, Response } from "express";
import { CreateTaskUseCase } from "./createTask.useCase";
import { ITaskRepository } from "../../../repositories/ITaskRepository.interface";
import { IUserRepository } from "../../../repositories/IUserRepository.interface";

export class CreateTaskController {
  constructor(
    private taskRepository: ITaskRepository,
    private userRepository: IUserRepository
  ) {}
  async handle(req: Request, res: Response) {
    try {
      const data = req.body;
      const createTaskUseCase = new CreateTaskUseCase(
        this.taskRepository,
        this.userRepository
      );
      const taskCreatedInDB = await createTaskUseCase.execute(data);
      res.status(201).json(taskCreatedInDB);
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  }
}
