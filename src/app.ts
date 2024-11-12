/* eslint-disable no-console */

import express, {
  json,
  NextFunction,
  Request,
  Response,
  urlencoded,
} from "express";
import cors from "cors";
import countryRouter from "./app/modules/country/country.route";
import { errorHandler } from "./middleware/error";
import { notFound } from "./middleware/not-found";
import { db } from "./db/db";
import { log_request } from "./db/schema/log_request.schema";
import logRouter from "./app/modules/log/log.route";

const app = express();
app.use(urlencoded({ extended: true }));
app.use(json());
app.use(cors());

const logRequest = async (req: Request, res: Response, next: NextFunction) => {
  if (req.url !== '/'  && req.url !== '/api/v1/log') {
    await db.insert(log_request).values({
      hostname: req.hostname,
      method: req.method,
      url: req.url,
      ip: req.ip,
    })
  }

  next();
};

app.use(logRequest);


app.use("/api/v1/country", logRequest, countryRouter);
app.use("/api/v1/log", logRequest, logRouter);

// 404 route not found
app.use(notFound);
// Error handling middleware
app.use(errorHandler);

export default app;
