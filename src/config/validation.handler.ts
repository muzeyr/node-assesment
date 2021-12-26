import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import { ResponsePayload } from "../dto";
import { StatusCode } from "./error.handler";

/**
 * @description routing route validator
 * @param req
 * @param res
 * @param next
 * @returns
 */
const routeValidator = (req: Request, res: Response, next: NextFunction) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res
			.json(
				ResponsePayload({
					code: StatusCode.ValidationError,
					msg: "ValidationError, please check your request params",
					errors: errors.array(),
				})
			);
	}
	next();
};

export { routeValidator };
