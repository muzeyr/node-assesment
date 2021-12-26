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
const cors = require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req: Request, res: Response, next: NextFunction) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Methods", "Origin, X-Requested-With, Content-Type, Accept");
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
