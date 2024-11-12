import { NextFunction } from "express";

// Create a try catch high order function
export const tryCatch = (fn: Function) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await fn(req, res, next);
    } catch (ex) {
      next(ex);
    }
  };
};
