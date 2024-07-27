import chalk from "chalk";
import mongoose, { Model, Schema } from "mongoose";

export type ForeignModel<T> = string | mongoose.ObjectId | T;
export type MyMongoDBModel<T> = Model<T, {}, {}, {}, any, Schema<T>>;

const DB_DEBUG_MODE = true;

export const dbDebugLog = (...args: Array<any>) =>
  DB_DEBUG_MODE ? console.log(chalk.magenta(...args)) : undefined;

export const dbDebugErrorLog = (...args: Array<any>) =>
  DB_DEBUG_MODE ? console.log(chalk.red(...args)) : undefined;
