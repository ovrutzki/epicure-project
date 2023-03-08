import { connect } from "mongoose";
import dotenv from "dotenv"

dotenv.config()
// const uri = "mongodb+srv://eran:QXOvthJGGQxNIKio@cluster0.nqtunna.mongodb.net/";
const uri = process.env.TOKEN_SECRET;

const dbName = "epicure";

export const connectToDB = async () => {
  try {
    await connect(`${uri}${dbName}`);
    console.log("db connected");
  } catch (err) {
    console.log("error connecting to DB", err);
  }
};