import { NextFunction, Request, Response } from "express";
import { JWTToken } from "../utils/token/Implementations/token.jsonwebtoken";

export const ensureAuthenticated = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const headerAuth = req.headers.authentication?.toString();

  if (!headerAuth) {
    return res.status(401).json({
      message: "Ops, parece que voce ainda nao efetuou o login",
    });
  }
  const [, token] = headerAuth.split(" ");

  if (!token) {
    return res.status(401).json({
      message: "Ops, parece que voce ainda nao efetuou o login",
    });
  }
  const verifyIfTokenIsValid = new JWTToken().validate(token);
  if (verifyIfTokenIsValid) {
    return next();
  }
  return res.status(401).json({ message: "Seu token de autorizacao expirou" });
};
