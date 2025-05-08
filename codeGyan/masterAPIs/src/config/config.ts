import { config as dotenvConfig } from "dotenv";

dotenvConfig();

const _config = {
  port: process.env.PORT,
  dataBaseUrl: process.env.MONGO_CONNECTION_STRING,
  env: process.env.NODE_ENV, // either DEV or PROD enviornment
  jwtSecret: process.env.JWT_SECRET
};

export const config = Object.freeze(_config);
