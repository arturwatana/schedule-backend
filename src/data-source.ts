import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./TypeORM/entities/User";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "admin",
  password: "admin",
  database: "",
  synchronize: true,
  logging: false,
  entities: [`${__dirname}/**/entities/*.{ts,js}`],
  migrations: [],
  subscribers: [],
});
