// people use classess, functions and objects to create a controller

import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import userModel from "./userModel";
import bcrypt from "bcrypt";
import { sign } from "jsonwebtoken";
import { config } from "../config/config";
import { IUser } from "./userTypes";

// create register account
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

  try {
    const user = await userModel.findOne({ email });

    if (user) {
      const error = createHttpError(400, "user already exist with this email");
      return next(error);
    }
  } catch {
    return next(createHttpError(500, "error while getting user"));
  }

  // password -- hash
  const hashedPassword = await bcrypt.hash(password, 10);

  let newUser: IUser;

  try {
    newUser = await userModel.create({
      name,
      email,
      password: hashedPassword,
    });
  } catch {
    return next(createHttpError(500, "error while creating user"));
  }

  // token Generation - jwt

  try {
    const token = sign({ sub: newUser._id }, config.jwtSecret as string, {
      expiresIn: "7d",
    });
    // process
    // response

    res.status(201).json({ accessToken: token });
  } catch {
    return next(createHttpError(500, "Error while creating JWT"));
  }
};

// create login account

const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  res.json({
    message: "ok",
  });

};

export { createUser, loginUser };
