import express from "express";
import routes from "./routes/index";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv"
import { connectToDB } from "./connection";

dotenv.config()
const app = express();
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(cors());

app.use(routes);
const port = process.env.PORT
app.listen(port, () => console.log("Listening on port"));

connectToDB()