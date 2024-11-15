import { NextFunction, Request, Response } from "express";
import { HttpError } from "http-errors";
import { config } from "../config/config";

// Global error handler

const globalErrorHandler = (
  err: HttpError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    message: err.message || "An unexpected error occurred",
    errorStack: config.env === "development" ? err.stack : "",
  });
};

export default globalErrorHandler;
