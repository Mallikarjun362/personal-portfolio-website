import { IHumanRoot, ILocation, locationSchema } from "./1_HumanRoot";
import { ForeignModel } from "../../Utils";
import { contentBlockSchema } from ".";
import { Schema } from "mongoose";

// TYPESCRIPT IDEA DEFINITION

enum ECommunityVisibilit {
  PROTECTED = "PROTECTED",
  PRIVATE = "PRIVATE",
  PUBLIC = "PUBLIC",
}

type SocialLink = string;

enum EPopularSocials {
  INSTAGRAM = "INSTAGRAM",
  SNAPCHAT = "SNAPCHAT",
  FACEBOOK = "FACEBOOK",
  TELEGRAM = "TELEGRAM",
  TWITTER = "TWITTER",
  DISCORD = "DISCORD",
}

export interface IPeopleCommunity {
  externalSocials: Map<EPopularSocials, SocialLink>;
  members: Array<ForeignModel<IHumanRoot>>;
  visibility: ECommunityVisibilit;
  admin: ForeignModel<IHumanRoot>;
  displayName: string;
  description: string;
  location: ILocation;
  countStats: {
    members: number;
  };
}

const peopleCommunity = new Schema<IPeopleCommunity>({
  admin: { type: Schema.Types.ObjectId, ref: "HumanRootModel", required: true },
  members: [{ type: Schema.Types.ObjectId, ref: "HumanRootModel" }],
  displayName: { required: true, maxlength: 100, type: String },
  externalSocials: { type: Schema.Types.ObjectId, of: String },
  visibility: { type: String, enum: ECommunityVisibilit },
  description: contentBlockSchema,
  location: locationSchema,
  countStats: {
    members: { type: Number, default: 0, min: 0 },
  },
});
