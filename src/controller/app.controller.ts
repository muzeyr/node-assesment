import { Request, Response } from "express";
import { RecordData, RecordModel, ResponsePayload } from "../dto";
import { search } from "../repository/app.repository";
import { StatusCode } from "../config/error.handler";

/**
 *
 * @param req
 * @param res
 * @description seacrhing with startDate, endDate, minCount, and maxCount
 */
const SearchController = async (req: Request, res: Response) => {
	const { startDate, endDate, minCount, maxCount } = req.body;

	try {
		const searchedDatas: Array<RecordModel> = await search({
			startDate,
			endDate,
			minCount,
			maxCount,
		});

		const records: Array<RecordData> = searchedDatas.map(record => {
			return {
				key: record.key,
				createdAt: record.createdAt.toString(),
				totalCount: record.totalCount,
			};
		});

		res.send(
			ResponsePayload({ code: StatusCode.Success, msg: "Success", records: records })
		);
	} catch (error) {
		res.send(
			ResponsePayload({ code: StatusCode.UnexpectedError, msg: "UnexpectedError",  errors: [error] })
		);
	}
};

export default SearchController;
