const request = require("supertest");
const mongoose = require("mongoose");
import dotenv from "dotenv";
import app from "../app";

dotenv.config();

beforeEach((done) => {
	return mongoose.connect(
		{ useNewUrlParser: true, useUnifiedTopology: true },
		() => done()
	);
});

describe("POST /api/search ", () => {
	test("Should have datas", async (done) => {
		const response = await request(app).post("/api/search").send({
			startDate: "2016-01-26",
			endDate: "2018-02-02",
			minCount: 2700,
			maxCount: 3000,
		});
		const searchedDatas = response?.body?.records.lenght > 0;
		expect(response.body.code).toBe(0);
		expect(response.body.msg).toBe("Success");
		if (searchedDatas) {
			expect(response.body.records[0]).toHaveProperty("key");
			expect(response.body.records[0]).toHaveProperty("createdAt");
			expect(response.body.records[0]).toHaveProperty("totalCount");
		}
		done();
	});

	test("Must be a date format with YYYY-MM-DD", async (done) => {
		const response = await request(app).post("/api/search").send({
			startDate: "01-01-2021",
			endDate: "02-02-2021",
			minCount: 2700,
			maxCount: 3000,
		});
		expect(response.body.code).toBe(2);
		expect(response.body.msg).toBe(
			"ValidationError, please check your request params"
		);
		done();
	});

	test("Must be startDate before endDate", async (done) => {
		const response = await request(app).post("/api/search").send({
			startDate: "2021-01-01",
			endDate: "2016-01-01",
			minCount: 2700,
			maxCount: 3000,
		});
		expect(response.body.code).toBe(2);
		expect(response.body.msg).toBe(
			"ValidationError, please check your request params"
		);
		done();
	});

	test("When the startDate is missing", async (done) => {
		const response = await request(app).post("/api/search").send({
			endDate: "2016-01-26",
			minCount: 2700,
			maxCount: 3000,
		});
		expect(response.body.code).toBe(2);
		expect(response.body.msg).toBe(
			"ValidationError, please check your request params"
		);
		done();
	});

	test("When the endDate is missing", async (done) => {
		const response = await request(app).post("/api/search").send({
			startDate: "2016-01-26",
			minCount: 2700,
			maxCount: 3000,
		});
		expect(response.body.code).toBe(2);
		expect(response.body.msg).toBe(
			"ValidationError, please check your request params"
		);
		done();
	});

	test("When the minCount is missing", async (done) => {
		const response = await request(app).post("/api/search").send({
			startDate: "2016-01-26",
			endDate: "2021-01-26",
			maxCount: 3000,
		});
		expect(response.body.code).toBe(2);
		expect(response.body.msg).toBe(
			"ValidationError, please check your request params"
		);
		done();
	});

	test("When the maxCount is missing", async (done) => {
		const response = await request(app).post("/api/search").send({
			startDate: "2016-01-26",
			endDate: "2021-01-26",
			minCount: 3000,
		});
		expect(response.body.code).toBe(2);
		expect(response.body.msg).toBe(
			"ValidationError, please check your request params"
		);
		done();
	});

	test("Must be a positive number", async (done) => {
		const response = await request(app).post("/api/search").send({
			startDate: "2016-01-26",
			endDate: "2021-01-26",
			minCount: -1,
			maxCount: 3000,
		});
		expect(response.body.code).toBe(2);
		expect(response.body.msg).toBe(
			"ValidationError, please check your request params"
		);
		done();
	});

	test("Should specify json in the content type header", async () => {
		const response = await request(app).post("/api/search").send({
			startDate: "2016-01-26",
			endDate: "2018-02-02",
			minCount: 2700,
			maxCount: 3000,
		});
		expect(response.headers["content-type"]).toEqual(
			expect.stringContaining("json")
		);
	});

	afterEach(() => {
		jest.clearAllMocks();
	});
});
function beforeEach(_arg0: (done: any) => any) {
	throw new Error("Function not implemented."+_arg0);
}

