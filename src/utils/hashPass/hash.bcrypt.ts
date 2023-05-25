import bcrypt from "bcrypt";
import { IPasswordHash } from "./interface/IPasswordHash";

export class PasswordBcryptHash implements IPasswordHash {
  async hash(password: string): Promise<string> {
    const passwordHashed = await bcrypt.hash(password, 10);
    return passwordHashed;
  }
  async compare(password: string, passwordHashed: string): Promise<boolean> {
    const isEqual = await bcrypt.compare(password, passwordHashed);
    return isEqual;
  }
}
