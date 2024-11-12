import express from "express";
import { userController } from "./user.controller";

const userRouter = express.Router();

userRouter.get("/", userController.getUserInfo);

export default userRouter;
