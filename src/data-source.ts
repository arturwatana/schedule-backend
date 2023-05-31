import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.AWS_URL,
  port: 5432,
  username: process.env.AWS_USERNAME,
  password: process.env.AWS_PASSWORD,
  database: "",
  logging: false,
  entities: [`${__dirname}/**/entities/*.{ts,js}`],
  migrations: [`${__dirname}/**/migration/*.{ts,js}`],
  subscribers: [],
});
