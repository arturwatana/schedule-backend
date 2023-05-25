import { ITask } from "./interfaces/ITask.interface";
import { v4 as uuid } from "uuid";

export class Task {
  id: string;
  name: string;
  urgency: string;
  startDate: string;
  endDate: string;
  description: string;
  completed: string;
  userEmail: string;

  private constructor(props: ITask) {
    this.id = uuid();
    this.name = props.name;
    this.urgency = props.urgency;
    this.startDate = props.startDate;
    this.endDate = props.endDate;
    this.description = props.description;
    this.userEmail = props.userEmail;
    this.completed = props.completed;
  }

  static create(props: ITask): Task {
    const task = new Task(props);
    return task;
  }
}
