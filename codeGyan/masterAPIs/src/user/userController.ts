// people use classess, functions and objects to create a controller

import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import userModel from "./userModel";
import bcrypt from "bcrypt";

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
  const hashedPassword = await bcrypt.hash(password,10)

  // process
  // response

  .res
    .json({
      message: "user created",
    });
};

export { createUser };
