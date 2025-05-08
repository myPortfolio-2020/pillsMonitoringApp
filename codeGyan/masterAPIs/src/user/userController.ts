// people use classess, functions and objects to create a controller

import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import userModel from "./userModel";
import bcrypt from "bcrypt";
import { sign } from "jsonwebtoken";
import { config } from "../config/config";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  // three things
  // validation
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    const error = createHttpError(
      400,
      "All fields are required! You are misiing something"
    );
    return next(error);
  }
  // database call - either user already exist or not -

  const user = await userModel.findOne({ email });

  if (user) {
    const error = createHttpError(400, "user already exist with this email");
    return next(error);
  }
  // password -- hash
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await userModel.create({
    name,
    email,
    password: hashedPassword,
  });

  // token Generation - jwt
  const token = sign({sub:newUser._id}, config.jwtSecret as string, {expiresIn:"7d"})
  // process
  // response

  res.json({ accessToken: token });
};

export { createUser };
