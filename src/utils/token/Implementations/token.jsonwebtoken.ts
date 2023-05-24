import { User } from "../../../Modules/User/entities/User.entity";
import { IToken } from "../token.interface";
import { sign, verify } from "jsonwebtoken";

export class JWTToken implements IToken {
  private SECRET_TOKEN = process.env.SECRET_TOKEN || "";

  create(user: User): string {
    const token = sign({ user }, this.SECRET_TOKEN, {
      subject: user.id,
      expiresIn: "5m",
    });
    return token;
  }
  validate(token: string): boolean {
    throw new Error("Method not implemented.");
  }
}
