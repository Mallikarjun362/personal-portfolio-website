import { dbDebugErrorLog, dbDebugLog } from "../Utils";

const MAINDB_DEBUG_MODE = true;

export const mainDbDebugLog = (...args: Array<any>) =>
  MAINDB_DEBUG_MODE ? dbDebugLog("(MainDB)", ...args) : null;

export const mainDbDebugErrorLog = (...args: Array<any>) =>
  MAINDB_DEBUG_MODE ? dbDebugErrorLog("(MainDB Error)", ...args) : null;
