import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import Logger from "./utils/logger.js";

dotenv.config();
const app = express();

app.use(cors);
app.use(express.json());
app.use(express.static("../puclic"));
app.listen(process.env.PORT, () => {
  Logger.success(`App listening on port ${process.env.PORT}`);
});
