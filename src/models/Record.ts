import mongoose from "mongoose";

/**
 *
 * @description  for the record entity
 */
const schema = new mongoose.Schema({
	key: String,
	value: String,
	createdAt: Date,
	counts: {
		min: { type: Number, min: 0 },
		max: { type: Number, min: 0 },
	},
});

export default mongoose.model("records", schema);
