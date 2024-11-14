import { NextFunction, Request, Response } from "express";

const uploadImage = async (req: Request, res: Response, next: NextFunction) => {
  console.log(req.file);

  try {
    if (!req.file) {
      return res.status(400).json({ message: "Please upload a file" });
    }
    return res.status(200).json({ message: "File uploaded successfully" });
  } catch (error) {
    next(error);
  }
};

export { uploadImage };
