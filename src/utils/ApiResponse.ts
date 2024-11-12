import { Response } from "express";

const ApiResSuccess = (res: Response,message: string,
  data: null | object | string | [] | number | boolean | undefined,
  statusCode: number = 200) => {
    return res.status(statusCode).json({
      message,
      data,
      statusCode
    });
};

const ApiResError = (res: Response,message: string,
  data?: null | object | string | [] | number | boolean | undefined,
  statusCode: number = 500) => {
    return res.status(statusCode).json({
      message,
      data,
      statusCode
    });
}

export { ApiResSuccess, ApiResError };
