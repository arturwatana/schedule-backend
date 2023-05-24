import { IUserRepository } from "../../../repositories/IUserRepository.interface";
import { User } from "../../entities/User.entity";
import { IUser } from "../../interfaces/IUser.interface";

export class AddNewUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(data: IUser): Promise<User> {
    const user = User.create(data);
    const createdUser = await this.userRepository.save(user);
    return createdUser;
  }
}
