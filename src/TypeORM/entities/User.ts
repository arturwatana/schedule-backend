import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryColumn()
  id: string;

  @Column()
  fullName: string;

  @Column()
  email: string;

  @Column()
  password: string;
  @Column()
  createdAt: string;
}
