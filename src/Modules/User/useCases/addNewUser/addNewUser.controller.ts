import { Request, Response } from "express";
import { IUserRepository } from "../../../repositories/IUserRepository.interface";
import { AddNewUserUseCase } from "./addNewUser.usecase";
import { IPasswordHash } from "../../../../utils/hashPass/interface/IPasswordHash";

export class AddNewUserController {
  constructor(
    private userRepository: IUserRepository,
    private passwordHash: IPasswordHash
  ) {}
  async handle(req: Request, res: Response) {
    try {
      const data = req.body;
      const addNewUserUseCase = new AddNewUserUseCase(
        this.userRepository,
        this.passwordHash
      );
      const createdUser = await addNewUserUseCase.execute(data);
      res.status(201).json(createdUser);
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  }
}
