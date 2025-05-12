import { Request, Response } from "express";
import { HttpError } from "http-errors";
import { config } from "./../config/config";

const globalErrorHandlers = (
  err: HttpError,
  req: Request,
  res: Response
): any => {
  const statusCode = err.statusCode || 500;
  return res.status(statusCode).json({
    message: err.message,
    // errorStack: err.stack,
    errorStack: config.env === "development" ? err.stack : "",
  });
};

export default globalErrorHandlers;
