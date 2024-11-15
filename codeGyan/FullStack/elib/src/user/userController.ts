import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import userModel from "./userModel";
import bcrypt from "bcrypt";
import { sign } from "jsonwebtoken";
import { config } from "../config/config";
import { IUser } from "./userTypes";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    const error = createHttpError(400, "All field are required");
    return next(error);
  }
  // validations

  try {
    // database call
    const user = await userModel.findOne({ email: email });
    if (user) {
      const error = createHttpError(400, "user already exist");
      return next(error);
    }
  } catch (err) {
    console.log(err, "error while getting user");
    return next(createHttpError(500, "error while getting user"));
  }

  // password hash
  const hashedPassword = await bcrypt.hash(password, 10);

  let newUser: IUser;

  try {
    newUser = await userModel.create({
      name,
      email,
      password: hashedPassword,
    });
  } catch (err) {
    console.log(err, "error while creating user");
    return next(createHttpError(500, "error while creating user"));
  }

  // Token Generation

  try {
    const token = sign(
      { sub: (await newUser)._id },
      config.jwtSecret as string,
      {
        expiresIn: "7d",
      }
    );

    // process
    // response
    res.json({ accessToken: token });
  } catch (err) {
    console.log(err, "error while signing JWT");
    return next(createHttpError(500, "error while signing JWT"));
  }

  res.json({ message: "user Created" });
};

export { createUser };
