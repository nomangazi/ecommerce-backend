/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from "express";
import { ApiResSuccess } from "../../../utils/ApiResponse";
import { log_request } from "../../../db/schema/log_request.schema";
import { db } from "../../../db/db";
import { eq } from "drizzle-orm";

const getLogInfo = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const logs = await db.select().from(log_request).where(eq(log_request.deletedAt, 0)).limit(100);
    ApiResSuccess(res, "Log info fetched successfully", logs);
  } catch (ex: any) {
    next(ex);
  }
};

export const logController = {
  getLogInfo,
};
