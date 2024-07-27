import { IPeopleCommunity } from "./4_PeopleCommunity";
import { contentBlockSchema, IContentBlock } from ".";
import { ForeignModel } from "../../Utils";
import { Schema } from "mongoose";

// MODEL NAME : "HumanRootModel"

// TYPESCRIPT IDEA DEFINITION

export enum EHumanRole {
  BASE = "BASE",
  // ENTITY-INDIVIDUALS
  HUMAN = "HUMAN",
  ADMIN = "ADMIN",
  MASTER = "MASTER",
  // ENTITY-GROUPS
  BUSINESS = "BUSINESS",
  ORG = "ORG",
}

enum EContentRenderType {
  TEXT = "TEXT",
  HTML = "HTML",
  MD = "MD",
}

interface INotification {
  renderType: EContentRenderType;
  fromUserName: string;
  timestamp: Date;
  message: string;
  isRead: boolean;
  title: string;
}

export interface ILocation {
  l3District: string;
  l1Country: string;
  l0Planet: string;
  l4Mandal: string;
  lInfCity: string;
  l2State: string;
  long: number;
  lat: number;
}

export const DefaultMainLocation: ILocation = {
  l3District: "MAIN",
  l1Country: "MAIN",
  l0Planet: "MAIN",
  l4Mandal: "MAIN",
  lInfCity: "MAIN",
  l2State: "MAIN",
  long: 0,
  lat: 0,
};

enum EInterestLoveLevel {
  NEUTRAL = 0,
  EXPLORING = 10,
  MONEY = 50,
  PASSIONATE = 100,
}

enum EInterestSkillLevel {
  NOVICE = 0,
  BEGINNER = 10,
  INTERMEDIATE = 30,
  ADVANCED = 50,
  PROFICIENT = 75,
  EXPERT = 100,
}

type TInterestLoveLevel = number;

type TInterestSkillLevel = number;

export interface IInterest {
  skillLevel: TInterestSkillLevel;
  loveLevel: TInterestLoveLevel;
  title: string;
}

export interface IHumanRoot {
  // MAIN
  interests: Array<IInterest>;
  displayName: string;
  location: ILocation;
  bio: IContentBlock;
  userName: string;
  email: string;
  dob: Date;
  plainTextFields: {
    interests: Array<IInterest>;
    [field: string]: any;
  };

  // ADDITIONAL
  likedBoringBlogPosts: { [boringBlogPostDbId: string]: Date };
  communities: Array<ForeignModel<IPeopleCommunity>>;
  following: Array<ForeignModel<IHumanRoot>>;
  settings: { [option: string]: any };
  notifications: Array<INotification>;
  profilePictureLink: string;
  followersCount: number;
  wallpaperLink: string;
  role: EHumanRole;
}

// SCHEMA DEFINITION

const notificationSchema = new Schema<INotification>({
  renderType: { type: String, enum: EContentRenderType },
  timestamp: { type: Date, default: () => Date.now() },
  fromUserName: { type: String, required: true },
  message: { type: String, maxlength: 2000 },
  isRead: { type: Boolean, default: false },
  title: { type: String, maxlength: 200 },
});

export const locationSchema = new Schema<ILocation>({
  long: { type: Number, default: 0, min: -180, max: 180 },
  lat: { type: Number, default: 0, min: -90, max: 90 },
  l3District: { type: String, default: "MAIN" },
  l1Country: { type: String, default: "MAIN" },
  l0Planet: { type: String, default: "MAIN" },
  l4Mandal: { type: String, default: "MAIN" },
  lInfCity: { type: String, default: "MAIN" },
  l2State: { type: String, default: "MAIN" },
});

const validateUserName = (s: string) => {
  const x = /^([a-z]|[A-Z]|[0-9]|_|\.)*$/.test(s);
  if (x && 3 <= s.length && s.length <= 30) {
    return true;
  }
  return false;
};

export const humanRootSchema = new Schema<IHumanRoot>({
  communities: [{ type: Schema.Types.ObjectId, ref: "PeopleCommunity" }],
  following: [{ type: Schema.Types.ObjectId, ref: "HumanRootModel" }],
  likedBoringBlogPosts: { type: Map, of: Date, default: () => ({}) },
  role: { type: String, enum: EHumanRole, default: EHumanRole.BASE },
  settings: { type: Map, of: Schema.Types.Mixed },
  displayName: { type: String, maxlength: 100 },
  userName: {
    type: String,
    unique: true,
    validate: {
      validator: (v: string) => validateUserName(v),
      message: () => "Invalid user name",
    },
  },
  followersCount: { type: Number, min: 0 },
  notifications: [notificationSchema],
  profilePictureLink: String,
  bio: contentBlockSchema,
  wallpaperLink: String,
  dob: Date,
  location: {
    type: locationSchema,
    default: () => ({
      l3District: "MAIN",
      l1Country: "MAIN",
      l0Planet: "MAIN",
      l4Mandal: "MAIN",
      lInfCity: "MAIN",
      l2State: "MAIN",
      long: 0,
      lat: 0,
    }),
  },
  email: {
    required: [true, "Email is required."],
    immutable: true,
    unique: true,
    type: String,
    index: true,
    validate: {
      message: (props) => `${props.value} is not a valid email address!`,
      validator: function (v: string) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(v);
      },
    },
  },
  interests: {
    type: [
      {
        loveLevel: { type: Number, min: 0, max: 100, default: 10 },
        skillLevel: { type: Number, min: 0, max: 100, default: 10 },
        title: { type: String, required: true },
      },
    ],
    default: [],
  },
});

export default humanRootSchema;
