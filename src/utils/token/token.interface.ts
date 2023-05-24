import { User } from "../../Modules/User/entities/User.entity";

export interface IToken {
  create(user: User): string;
  validate(token: string): boolean;
}
