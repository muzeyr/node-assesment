import express from "express";
import { Request, Response, NextFunction } from "express";

import dotenv from "dotenv";
import swaggerUi from "swagger-ui-express";
dotenv.config();
const app = express();
const port = process.env.PORT || 4000;
const docs = process.env.SWAGGER || "docs";

import swaggerDocument from "./config/swagger";
import { connectMongoose } from "./config/db";
import router from "./routes/routes";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req: Request, res: Response, next: NextFunction) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Methods", "POST");
	  next();
});
app.get('/', (req, res) => {
	res.send('<script> window.location.replace("/docs");</script>')
});
app.use("/api/", router);
app.use("/docs/", swaggerUi.serve, swaggerUi.setup(swaggerDocument, { explorer: false }));
connectMongoose();

app.listen(port, () => {
	console.log(`Swagger is listening at http://localhost:${port}/${docs}`);
	return console.log(`Express is listening at http://localhost:${port}`);
});
export default app;
