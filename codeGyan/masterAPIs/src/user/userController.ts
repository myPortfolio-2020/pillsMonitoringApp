// people use classess, functions and objects to create a controller

import { NextFunction, Request, Response } from "express";

const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {

    // three things 
    // validation
    // process
    // response

    res.json({
        message:'user created'
    })
};

export { createUser };
