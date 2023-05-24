import { Request, Response } from "express";
import { IPasswordHash } from "../../../../utils/hashPass/interface/IPasswordHash";
import { IToken } from "../../../../utils/token/token.interface";
import { IUserRepository } from "../../../repositories/IUserRepository.interface";
import { AuthenticateUserUseCase } from "./authenticateUser.usecase";

export class AuthenticateUserController {
  constructor(
    private userRepository: IUserRepository,
    private token: IToken,
    private passwordHash: IPasswordHash
  ) {}
  async handle(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const authenticateUserUseCase = new AuthenticateUserUseCase(
        this.userRepository,
        this.token,
        this.passwordHash
      );
      const token = await authenticateUserUseCase.execute(email, password);

      res.status(200).json(token);
    } catch (err: any) {
      res.status(401).json({ message: err.message });
    }
  }
}
