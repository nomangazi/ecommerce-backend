import express from "express";
import { logController } from "./log.controller";

const logRouter = express.Router();

logRouter.get("/", logController.getLogInfo);

export default logRouter;
