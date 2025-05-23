import path from "node:path";
import { raw, Request, Response } from "express";
import cloudinary from "../config/cloudinary";

const createBook = async (req: Request, res: Response) => {
  console.log("files", req.files);

  const files = req.files as { [fieldname: string]: Express.Multer.File[] };
  const coverImageMimeType = files.coverImage[0].mimetype.split("/").at(-1);
  const fileName = files.coverImage[0].filename;
  const filePath = path.resolve(
    __dirname,
    "../../public/data/uploads",
    fileName
  );

  const uploadResult = await cloudinary.uploader.upload(filePath, {
    filename_override: fileName,
    folder: "book-covers",
    format: coverImageMimeType,
  });

  const bookFileName = files.file[0].filename;
  const bookFilePath = path.resolve(
    __dirname,
    "../../public/data/uploads",
    bookFileName
  );

  // resource_type: 'raw' is for pdf file but not for image

  try {
    const bookFileUploadResult = await cloudinary.uploader.upload(
      bookFilePath,
      {
        resource_type: "raw",
        filename_override: bookFileName,
        folder: "book-pdfs",
        format: "pdf",
        // format: coverImageMimeType,
      }
    );
    console.log("bookFileUploadResult", bookFileUploadResult);
  } catch (err) {
    console.log(err);
  }

  console.log("uploadResult:", uploadResult);
  res.json({});
};

export { createBook };
