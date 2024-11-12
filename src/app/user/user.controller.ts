import { Request, Response } from "express";
import { ApiResError, ApiResSuccess } from "../../utils/ApiResponse";
import { db } from "../../db/db";
import { user } from "../../db/schema/user.schema";
import { eq } from "drizzle-orm";

const getUserInfo = async (req: Request, res: Response) => {
  //--Collect user info from database

  const userInfo = await db
    .select({
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      address: user.address,
    })
    .from(user)
    .where(eq(user.id, 1))
    .limit(1);

  if (!userInfo) {
    ApiResError(res, "User not found or not in active status.", 404);
  }

  ApiResSuccess(res, "Country info fetched successfully", userInfo);
};

export const userController = {
  getUserInfo,
};
