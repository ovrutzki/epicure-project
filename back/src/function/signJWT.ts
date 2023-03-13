import { NextFunction, Request, Response } from "express";
import JWT from "jsonwebtoken";
import config from "../config/config";
import logging from "../config/logging";
import { IUser } from "../models/users.model";

const NAMESPACE = "Auth";

const signJWT = (
  user: IUser,
  callback: (error: Error | null, token: string | null) => void
): void => {
  let timeSinchEpoch = new Date().getTime();
  let expirationTime =timeSinchEpoch + Number(config.server.token.expireTime) * 100000;
  let expirationTimeInSec = Math.floor(expirationTime / 1000);

  logging.info(NAMESPACE, `attempt to sign token for ${user.email}`);

  try {
    JWT.sign(
      {
        email: user.email,
      },
      config.server.token.secret,
      {
        issuer: config.server.token.issuer,
        algorithm: "HS256",
        expiresIn: expirationTimeInSec,
      },
      (error, token) => {
        if (error) {
          callback(error, null);
        } else if (token) {
          callback(null, token);
        }
      }
    );
  } catch (error: any) {
    logging.error(NAMESPACE, error.message, error);
    callback(error, null);
  }
};

export default signJWT;
