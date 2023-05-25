import { IPasswordHash } from "../../../../utils/hashPass/interface/IPasswordHash";
import { IToken } from "../../../../utils/token/token.interface";
import { IUserRepository } from "../../../repositories/IUserRepository.interface";

export class AuthenticateUserUseCase {
  constructor(
    private userRepository: IUserRepository,
    private token: IToken,
    private passwordHash: IPasswordHash
  ) {}

  async execute(email: string, password: string) {
    const user = await this.userRepository.findByEmail(email);
    if (!user) {
      throw new Error("Usuário ou senha invalidos");
    }
    const passwordIsEqual = await this.passwordHash.compare(
      password,
      user.password
    );

    if (!passwordIsEqual) {
      throw new Error("Usuário ou senha invalidos");
    }

    const token = this.token.create(user);
    const userAuthenticated = {
      email: user.email,
      fullName: user.fullName,
      token,
    };
    return userAuthenticated;
  }
}
