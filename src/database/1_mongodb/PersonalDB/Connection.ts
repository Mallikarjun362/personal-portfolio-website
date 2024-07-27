import mongoose, { Connection } from "mongoose";
import { personalDbDebugLog } from "./Utils";

declare global {
  var personalConn: Connection;
}

const getPersonalConnPoolSize = (): number | undefined =>
  (global.personalConn as any)?.base?.connections?.length;

export const logPersonalDBStats = () => {
  const c = (global as any).personalConn;
  personalDbDebugLog(`#Conn: ${c?.base?.connections?.length}`);
};

export const getPersonalConnection = async (): Promise<Connection> => {
  await new Promise((r) => setTimeout(r, 300));
  if (global.personalConn) {
    personalDbDebugLog("Already Created");
    return global.personalConn;
  } else {
    personalDbDebugLog("Creating PersonalDB Connection");
    // CREATING CONNECTION
    const MONGODB_CONNECTION_URI = "";
    const connection = await mongoose
      .createConnection(MONGODB_CONNECTION_URI, {
        appName: "personal-mongo-db",
      })
      .asPromise();
    // CONNECTION CALLBACKS
    connection.on("connected", () =>
      personalDbDebugLog("Connected", getPersonalConnPoolSize())
    );
    connection.on("disconnected", () =>
      personalDbDebugLog("Disconnected", getPersonalConnPoolSize())
    );
    // CREATING MODELS

    (global as any)["personalConn"] = connection;
    return connection;
  }
};

interface IPersonalDBModels {}

export const getPersonalDBModels = async (): Promise<IPersonalDBModels> => {
  const personalConnection = await getPersonalConnection();
  return {};
};
