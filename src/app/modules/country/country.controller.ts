import { Request, Response } from "express";
import { ApiResSuccess } from "../../../utils/ApiResponse";

const getCountryInfo = async (req: Request, res: Response) => {
  ApiResSuccess(res, "Country info fetched successfully", {
    country: "Bangladesh",
  });
};

export const countryController = {
  getCountryInfo,
};
