import express from "express";
import { uploadImage } from "./file.controller";

const fileRouter = express.Router();

fileRouter.post("/image", uploadImage);

export { fileRouter };
