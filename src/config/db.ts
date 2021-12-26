import { ConnectionOptions, connect } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGO_DB_URI = process.env.MONGO_DB_URI || "";

export async function connectMongoose() {
	const options: ConnectionOptions = {
		useNewUrlParser: true,
		useCreateIndex: true,
		useFindAndModify: false,
		useUnifiedTopology: true,
	};

	await connect(MONGO_DB_URI, options)
		.then(() => {
			return console.log("Database Connected!");
		})
		.catch((err: any): void => {
			console.error(`Error connecting to the database. \n${err}`);
		});
}
