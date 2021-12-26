import express from "express";
import dotenv from "dotenv";
import swaggerUi from "swagger-ui-express";

dotenv.config();
const app = express();
const port = process.env.PORT || 4000;
const docs = process.env.SWAGGER || "docs";

import swaggerDocument from "./config/swagger";
import { connectMongoose } from "./config/db";
import Router from "./routes/routes";

connectMongoose();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/docs/", swaggerUi.serve, swaggerUi.setup(swaggerDocument, { explorer: false }));
app.use("/api/", Router);

app.listen(port, () => {
	console.log(`Swagger is listening at http://localhost:${port}/${docs}`);
	return console.log(`Express is listening at http://localhost:${port}`);
});
