/* eslint-disable no-console */

import express, { json, NextFunction, Request, Response, urlencoded } from "express";
import cors from "cors";
import { errorHandler } from "./middleware/error";
import { notFound } from "./middleware/not-found";
import { db } from "./db/db";
import { log_request } from "./db/schema/log_request.schema";
import logRouter from "./app/log/log.route";
import userRouter from "./app/user/user.route";

const app = express();
app.use(urlencoded({ extended: true }));
app.use(json());
app.use(cors());

const logRequest = async (req: Request, res: Response, next: NextFunction) => {
  if (req.url !== "/" && req.url !== "/api/v1/log") {
    await db.insert(log_request).values({
      hostname: req.hostname,
      method: req.method,
      url: req.url,
      ip: req.ip,
    });
  }

  next();
};

app.use(logRequest);

app.use("/api/v1/user", logRequest, userRouter);
app.use("/api/v1/log", logRequest, logRouter);

// 404 route not found
app.use(notFound);
// Error handling middleware
app.use(errorHandler);

export default app;
