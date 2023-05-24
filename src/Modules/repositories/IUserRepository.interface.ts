import { User } from "../User/entities/User.entity";

export interface IUserRepository {
  save(data: User): Promise<User>;
  showAll(): Promise<User[]>;
}
