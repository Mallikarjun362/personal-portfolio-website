import { contentBlockSchema, IContentBlock } from ".";
import { ForeignModel } from "../../Utils";
import { IBlogPost } from "./2_BlogPost";
import { Schema } from "mongoose";
import {
  locationSchema,
  IHumanRoot,
  IInterest,
  ILocation,
} from "./1_HumanRoot";

// TYPESCRIPT IDEA DEFINITIONS
// LOCATION SPECIFIC ACTIVITY STATISTICS

interface IStdLocationStatsSummaryReport {
  topTrending: {
    blogPosts: Array<string | IBlogPost>;
    interests: Array<string | IInterest>;
    communities: Array<string | any>;
  };
  countNewlyCreated: {
    communities: number;
    population: number;
    blogPosts: number;
  };
  // WITH-IN A TIME PERIOD
  fromTimestamp: Date;
  toTimestamp: Date;
}

enum ELocationType {
  COUNTRY = "COUNTRY",
  STATE = "STATE",
  CITY = "CITY",
  AREA = "AREA",
}

interface IStdLocation {
  IStdLocationStatsSummary: IStdLocationStatsSummaryReport;
  statsTimeline: Array<IStdLocationStatsSummaryReport>;
  population: Array<string | IHumanRoot | any>;
  statsFarPast: IStdLocationStatsSummaryReport;
  immediateParent: ForeignModel<IStdLocation>;
  locationType: ELocationType;
  description: IContentBlock;
  location: ILocation;
  displayName: string;
}

const stdLocationSchema = new Schema<IStdLocation>({
  displayName: { type: String, maxlength: 200 },
  description: contentBlockSchema,
  location: locationSchema,
  population: [
    {
      type: Schema.Types.ObjectId,
      ref: "HumanRootModel",
    },
  ],
});

export default stdLocationSchema;
