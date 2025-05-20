import {  Request, Response } from "express";

const createBook = async (req: Request, res: Response) => {
  console.log("files", req.files);
  res.json({});
};

export { createBook };
