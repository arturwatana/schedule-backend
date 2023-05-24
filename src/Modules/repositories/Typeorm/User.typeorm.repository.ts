import { AppDataSource } from "../../../data-source";
import { User } from "../../User/entities/User.entity";
import { User as TypeORMUser } from "../../../TypeORM/entities/User";
import { IUserRepository } from "../IUserRepository.interface";

export class UserTypeORMRepository implements IUserRepository {
  userRepository = AppDataSource.getRepository(TypeORMUser);
  async save(data: User): Promise<User> {
    const createdUser = await this.userRepository.save(data);
    return createdUser;
  }
  showAll(): Promise<User[]> {
    return this.userRepository.find();
  }
}
