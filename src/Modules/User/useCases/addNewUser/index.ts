import { User } from "../../../../TypeORM/entities/User";
import { AppDataSource } from "../../../../data-source";
import { PasswordBcryptHash } from "../../../../utils/hashPass/hash.bcrypt";
import { UserTypeORMRepository } from "../../../repositories/Typeorm/User.typeorm.repository";
import { AddNewUserController } from "./addNewUser.controller";

const userRepository = new UserTypeORMRepository();
const passwordHash = new PasswordBcryptHash();
const addNewUserController = new AddNewUserController(
  userRepository,
  passwordHash
);

export default addNewUserController;
