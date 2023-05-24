import { User } from "../../../../TypeORM/entities/User";
import { AppDataSource } from "../../../../data-source";
import { UserTypeORMRepository } from "../../../repositories/Typeorm/User.typeorm.repository";
import { AddNewUserController } from "./addNewUser.controller";

const userRepository = new UserTypeORMRepository();
const addNewUserController = new AddNewUserController(userRepository);

export default addNewUserController;
