import { Router } from "express";
import { UserTypeORMRepository } from "../Modules/repositories/Typeorm/User.typeorm.repository";
import { AddNewUserController } from "../Modules/User/useCases/addNewUser/addNewUser.controller";
import addNewUserController from "../Modules/User/useCases/addNewUser";

export const userRoutes = Router();

userRoutes.get("/users", async (req, res) => {
  const userRepository = new UserTypeORMRepository();
  res.status(200).json(await userRepository.showAll());
});

userRoutes.post("/users", (req, res) => {
  addNewUserController.handle(req, res);
});
