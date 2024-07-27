/*
ACTIVITY INSTANCE
1. ACTIVITY TYPE
2. COUNT
3. TIME STAMP
*/

import { ForeignModel } from "@/database/1_mongodb/Utils";
import { IPhysicalActivity } from "./1_PhysicalActivity";

export interface IActivityInstance {
  activityType: ForeignModel<IPhysicalActivity>;
  timestamp: Date;
  count: number;
}
