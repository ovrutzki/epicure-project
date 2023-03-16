import { Schema, model } from "mongoose";
import mongoose from "mongoose";

export interface IUser{
    first: string;
    last:string;
    address:string;
    phone:string;
    email:string;
    password:string;
    role:string;
}

export const userSchema = new Schema<IUser>({
    first: {type: String},
    last:{type: String},
    address:{type: String},
    phone:{type: String},
    email:{type: String,lowercase: true},
    password:{type: String},
    role:{type: String, default:"user"}
})

export const UserModel = mongoose.model<IUser>("users", userSchema);