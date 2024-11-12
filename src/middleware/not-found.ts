import { Request, Response } from "express";
import { ApiResError } from "../utils/ApiResponse";

export function notFound(req: Request, res: Response) {
  ApiResError(res, "Not found", null, 404)
}
