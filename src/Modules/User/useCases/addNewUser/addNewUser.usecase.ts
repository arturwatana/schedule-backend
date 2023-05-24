import { IPasswordHash } from "../../../../utils/hashPass/interface/IPasswordHash";
import { IUserRepository } from "../../../repositories/IUserRepository.interface";
import { User } from "../../entities/User.entity";
import { IUser } from "../../interfaces/IUser.interface";

export class AddNewUserUseCase {
  constructor(
    private userRepository: IUserRepository,
    private passwordHash: IPasswordHash
  ) {}

  async execute(data: IUser): Promise<User> {
    const userAlreadyExists = await this.userRepository.findByEmail(data.email);
    if (userAlreadyExists) {
      throw new Error(`User ${data.email} already exists`);
    }
    const user = User.create(data);
    const passwordHash = await this.passwordHash.hash(user.password);
    user.password = passwordHash;
    const createdUser = await this.userRepository.save(user);
    return createdUser;
  }
}
