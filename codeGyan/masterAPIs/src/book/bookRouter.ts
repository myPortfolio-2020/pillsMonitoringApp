import express from "express";
import path from "node:path";
import { createBook } from "./bookController";
import multer from "multer";

const bookRouter = express.Router();

//routes
// api/books
// remeber his diagram, multer is a middlewate that can be define as in between the path and controller
// bookRouter.post("/", ()=>{} ,createBook);
// and we are using multer

const upload = multer({
  dest: path.resolve(__dirname, "../../public/data/uploads"),
  limits: { fileSize: 3e7 }, //30mb
});

bookRouter.post(
  "/",
  upload.fields([
    { name: "coverImage", maxCount: 1 }, //coverImage is given in our model
    { name: "file", maxCount: 1 }, // file is given in our model
  ]),
  createBook
);

export default bookRouter;
