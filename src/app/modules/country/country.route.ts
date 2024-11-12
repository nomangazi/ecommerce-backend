import express from "express";
import { countryController } from "./country.controller";

const countryRouter = express.Router();

countryRouter.get("/", countryController.getCountryInfo);

export default countryRouter;
