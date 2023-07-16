import { Response } from 'express';

interface IIjHttpErrorResponse {
  res: Response;
  error: string;
  statusCode: number;
  data: Object;
}

interface IIjHttpSuccessResponse {
  res: Response;
  message?: string;
  statusCode: number;
  data: Object;
}

const IjHttpErrorResponse = ({
  res,
  error,
  statusCode,
  data,
}: IIjHttpErrorResponse) => {
  return res.status(statusCode).json({
    message: 'An error occurred',
    error: error,
    status: statusCode,
    data,
  });
};

const IjHttpSuccessResponse = (
  res: Response,
  message: string,
  statusCode: number,
  data: Object
) => {
  return res.status(statusCode).json({
    message: message ?? 'Operation successful',
    status: statusCode,
    data,
  });
};

export {
  IIjHttpErrorResponse,
  IIjHttpSuccessResponse,
  IjHttpErrorResponse,
  IjHttpSuccessResponse,
};
