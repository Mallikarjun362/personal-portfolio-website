// UTILITIES
import mongoose, { Connection } from "mongoose";
import { MyMongoDBModel } from "../Utils";
import { mainDbDebugLog } from "./Utils";
// SCHEMAS
import humanRootSchema, { IHumanRoot } from "../Schemas/Core/1_HumanRoot";
import boringBlogPostSchema, {
  IBoringBlogPost,
} from "../Schemas/Core/12_BoringBlogPost";

declare global {
  var mainConn: Connection;
}
const MONGODB_CONNECTION_URI =
  "mongodb+srv://Tom:Jerry@cluster0.koq8kzq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0&maxPoolSize=20&socketTimeoutMS=1000&minPoolSize=0";

const getMainConnPoolSize = (): number | undefined =>
  (global.mainConn as any)?.base?.connections?.length;

export const logMainDBStats = () => {
  const c = (global as any).mainConn;
  mainDbDebugLog(`#Conn: ${c?.base?.connections?.length}`);
};

export const getMainConnection = async (): Promise<Connection> => {
  await new Promise((r) => setTimeout(r, 300));
  if (global.mainConn) {
    mainDbDebugLog("Already Created");
    return global.mainConn;
  } else {
    mainDbDebugLog("Creating MainDB Connection");
    // CREATING CONNECTION
    const connection = await mongoose
      .createConnection(MONGODB_CONNECTION_URI, { appName: "main-mongo-db" })
      .asPromise();
    // CONNECTION CALLBACKS
    connection.on("connected", () =>
      mainDbDebugLog("Connected", getMainConnPoolSize())
    );
    connection.on("disconnected", () =>
      mainDbDebugLog("Disconnected", getMainConnPoolSize())
    );
    // CREATING MODELS
    connection.model("HumanRootModel", humanRootSchema);
    connection.model("BoringBlogPostModel", boringBlogPostSchema);
    (global as any)["mainConn"] = connection;
    return connection;
  }
};

interface IMainDBModels {
  HumanRootModel: MyMongoDBModel<IHumanRoot>;
  BoringBlogPostModel: MyMongoDBModel<IBoringBlogPost>;
}

export const getMainDBModels = async (): Promise<IMainDBModels> => {
  const mainConnection = await getMainConnection();
  // 1. Human Root Model
  const HumanRootModel: MyMongoDBModel<IHumanRoot> =
    mainConnection.models["HumanRootModel"];
  // 2. Boring Blog Post Model
  const BoringBlogPostModel: MyMongoDBModel<IBoringBlogPost> =
    mainConnection.models["BoringBlogPostModel"];
  return { HumanRootModel, BoringBlogPostModel };
};
