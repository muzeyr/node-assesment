import { Request, Response, NextFunction } from "express";
import { ResponsePayload } from "../dto";

export enum StatusCode {
  Success = 0,
  UnexpectedError = 1,
  ValidationError = 2,
  ApplicationError = 3,
}

/**
 * exception handler
 *
 * @param err
 * @param req
 * @param res
 * @param next
 */
export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
	res.send(
		ResponsePayload({
			code: StatusCode.UnexpectedError,
			msg: "Unexpected Error",
			errors: [err],
		})
	);
};
