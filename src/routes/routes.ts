import express from "express";
import { body } from "express-validator";
import AppController from "../controller/app.controller";
import { routeValidator } from "../config/validation.handler";

const router = express.Router();

/**
 * @description for post search
 */
router.post(
	"/search",
	[
		body("startDate").isDate({ format: "YYYY-MM-DD" }).withMessage("Must be a date with YYYY-MM-DD format"),
		body("endDate").isDate({ format: "YYYY-MM-DD" }).withMessage("Must be a date with YYYY-MM-DD format"),
		body("endDate").exists().custom((value, { req }) => {

			const [sy, sm, sd] = req.body.startDate.split("-");
			const [ey, em, ed] = req.body.endDate.split("-");

			const startDate = new Date(sy, sm, sd);
			const endDate = new Date(ey, em, ed);
      
			if (startDate >= endDate) {
				throw new Error("Start date of project must be before End date")
			}
			return true;

		}),
		body("minCount").exists().custom(value => {
			if (value < 0) {
				throw new Error("Must be a positive number");
			}
			return true;
		}),
		body("maxCount").exists().custom(value => {
			if (value < 0) {
				throw new Error("Must be a positive number");
			}
			return true;
		}),
	],
	routeValidator,
	AppController
);

export default router;
