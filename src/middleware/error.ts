import { Request, Response } from "express";
import { CustomError } from "../lib/custom-error";

export const errorHandler = (err: CustomError, req: Request, res: Response) => {
  try {
    const msg = JSON.parse(err.message);
    res.status(err.statusCode).json({ msg });
  } catch (error) {
    res.status(err.statusCode).json({ msg: err.message });
  }
};
