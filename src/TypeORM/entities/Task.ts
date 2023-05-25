import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Task {
  @PrimaryColumn()
  id: string;
  @Column()
  name: string;
  @Column()
  urgency: string;
  @Column()
  description: string;
  @Column()
  startDate: string;
  @Column()
  endDate: string;
  @Column()
  completed: string;
  @Column()
  userEmail: string;
}
