import { DateFormat } from "../../../utils/DateFormat";
import { IUser } from "../interfaces/IUser.interface";
import { v4 as uuid } from "uuid";

const dateFormat = new DateFormat();

export class User {
  id: string;
  fullName: string;
  email: string;
  password: string;
  createdAt: string;

  private constructor(props: IUser) {
    this.id = uuid();
    this.fullName = props.fullName;
    this.email = props.email;
    this.password = props.password;
    this.createdAt = dateFormat.formatNewDate();
  }

  static create(props: IUser): User {
    const user = new User(props);
    return user;
  }
}
