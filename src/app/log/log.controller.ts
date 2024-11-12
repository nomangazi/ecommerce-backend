/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from "express";
import { eq } from "drizzle-orm";
import { db } from "../../db/db";
import { log_request } from "../../db/schema/log_request.schema";
import { ApiResSuccess } from "../../utils/ApiResponse";

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
