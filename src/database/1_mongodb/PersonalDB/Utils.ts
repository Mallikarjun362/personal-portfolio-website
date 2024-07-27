import { dbDebugErrorLog, dbDebugLog } from "../Utils";

const MAINDB_DEBUG_MODE = true;

export const personalDbDebugLog = (...args: Array<any>) =>
  MAINDB_DEBUG_MODE ? dbDebugLog("(PersonalDB)", ...args) : null;

export const personalDbDebugErrorLog = (...args: Array<any>) =>
  MAINDB_DEBUG_MODE ? dbDebugErrorLog("(PersonalDB Error)", ...args) : null;
