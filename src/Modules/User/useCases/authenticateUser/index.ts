import { PasswordBcryptHash } from "../../../../utils/hashPass/hash.bcrypt";
import { JWTToken } from "../../../../utils/token/Implementations/token.jsonwebtoken";
import { UserTypeORMRepository } from "../../../repositories/Typeorm/User.typeorm.repository";
import { AuthenticateUserController } from "./authenticateUser.controller";

const passwordHash = new PasswordBcryptHash();
const token = new JWTToken();
const userRepository = new UserTypeORMRepository();

const authenticateUserController = new AuthenticateUserController(
  userRepository,
  token,
  passwordHash
);

export default authenticateUserController;
