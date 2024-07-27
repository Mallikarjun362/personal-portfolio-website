import { Schema } from "mongoose";
import { ForeignModel } from "../../Utils";

// TYPESCRIPT IDEA DEFINITION

enum EPlatformActivityType {}

enum EEntityType {}

interface IPlatformActivity {
  activityType: EPlatformActivityType;
  entityDbId: ForeignModel<any>;
  entityType: EEntityType;
  timestamp: Date;
}

const platformActivitySchema = new Schema<IPlatformActivity>({});

export default platformActivitySchema;
