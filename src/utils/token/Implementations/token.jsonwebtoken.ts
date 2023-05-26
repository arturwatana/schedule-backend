import { User } from "../../../Modules/User/entities/User.entity";
import { IToken } from "../token.interface";
import { sign, verify } from "jsonwebtoken";

export class JWTToken implements IToken {
  private SECRET_TOKEN = process.env.SECRET_TOKEN || "";

  create(user: User): string {
    const token = sign({ user }, this.SECRET_TOKEN, {
      subject: user.id,
      expiresIn: "5h",
    });
    return token;
  }
  validate(token: string): boolean {
    try {
      const isValid = verify(token, this.SECRET_TOKEN);
      return true;
    } catch (err: any) {
      return false;
    }
  }
}
