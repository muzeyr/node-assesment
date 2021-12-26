import { SearchModel } from "../dto";
import Record from "../models/Record";

/**
 *
 * @description search parameters
 *
 * @param startDate
 * @param startDate
 * @param minCount
 * @param maxCount
 *
 * @returns totalCount, createdAt and key
 */
const search = async ({
	startDate,
	endDate,
	minCount,
	maxCount,
}: SearchModel): Promise<any[]> =>
	await Record.aggregate([
		{
			$match: {
				createdAt: { $gte: new Date(startDate), $lte: new Date(endDate) },
			},
		},
		{ $project: { key: 1, createdAt: 1, totalCount: { $sum: "$counts" } } },
		{ $match: { totalCount: { $gte: minCount, $lt: maxCount } } },
	]);

export { search };
