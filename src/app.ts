import express from "express";
import dotenv from "dotenv";
import swaggerUi from "swagger-ui-express";

dotenv.config();
const app = express();
const port = process.env.PORT || 4000;


import swaggerDocument from "../config/swagger";
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument, { explorer: false }));

app.get("/", (req, res) => {
	res.send("Hello World.....!");
});

app.listen(port, () => {
	return console.log(`Express is listening at http://localhost:${port}`);
});
