import { ForeignModel } from "../../Utils";
import { Schema } from "mongoose";
import {
  DefaultMainLocation,
  locationSchema,
  IHumanRoot,
  ILocation,
} from "./1_HumanRoot";

// ======================================================================================================
// 1. [X] TYPESCRIPT IDEA DEFINITION
// 2. [X] Schema Definition

enum EContentRenderType {
  TEXT = "TEXT",
  HTML = "HTML",
  IMG = "IMG",
  MD = "MD",
}

enum EBoringBlogPostVisibilityOptions {
  ONLY_SUBSCRIPTION = "ONLY_SUBSCRIPTION",
  PROTECTED = "PROTECTED",
  PRIVATE = "PRIVATE",
  PUBLIC = "PUBLIC",
}

export interface IContentBlock {
  renderType: EContentRenderType;
  content: string;
  title: string;
  notes: string;
}

interface IBoringBlogPostComment {
  userName: string;
  message: string;
  timestamp: Date;
}

interface IBoringBlogPostStats {
  likesCount: number;
  viewCount: number;
}

enum EBoringBlogPostStandardSection {
  INTRODUCTION = "INTRODUCTION",
  MAIN_POSTER = "MAIN_POSTER",
  DESCRIPTION = "DESCRIPTION",
  CONCLUSION = "CONCLUSION",
  ABSTRACT = "ABSTRACT",
  SUMMARY = "SUMMARY",
}

export const MAX_NUM_ANALYTICS_INSTANCES: number = 20;

// MAIN
export interface IBoringBlogPost {
  // REQUIRED MAIN CONTENT FIELDS
  // REQUIRED
  creator: ForeignModel<IHumanRoot>;
  tags: { [key: string]: number };
  mainContentBlock: IContentBlock;
  location: ILocation;
  abstract: string;
  title: string;

  // PERFORMANCE MONITORING FIELDS
  analyticsTimeline: { [key: string]: IBoringBlogPostStats };
  comments: Array<IBoringBlogPostComment>;
  // AGGREGATION / CUMMULATIVE RESULTS
  analyticsTotal: IBoringBlogPostStats;

  // META DATA
  isPublic: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// ======================================================================================================
// SCHEMA DEFINITION

export const contentBlockSchema = new Schema<IContentBlock>({
  renderType: {
    default: EContentRenderType.TEXT,
    enum: EContentRenderType,
    type: String,
  },
  content: String,
});

const blogPostCommentSchema = new Schema<IBoringBlogPostComment>({
  userName: String,
  message: String,
  timestamp: Date,
});

const blogPostStatsSchema = new Schema<IBoringBlogPostStats>({
  likesCount: Number,
  viewCount: Number,
});

// MAIN SCHEMA
// 1. Title
// 2. Main Content Block
// 3. Is Public
// 4. Tags
// 5. Location
// 6. Additional Content Blocks

const boringBlogPostSchema = new Schema<IBoringBlogPost>({
  // AUTOMATIC FIELDS
  // DEFAULTS
  createdAt: { type: Date, default: () => Date.now(), immutable: true },
  comments: { type: [blogPostCommentSchema], default: () => [] },
  updatedAt: { type: Date, default: () => Date.now() },
  isPublic: { type: Boolean, default: true },
  abstract: { type: String, default: "" },
  location: {
    type: locationSchema,
    default: () => DefaultMainLocation,
    immutable: true,
  },
  tags: {
    default: () => ({ General: 100 }),
    type: Schema.Types.Map,
    of: Number,
  },
  // REQUIRED
  mainContentBlock: { type: contentBlockSchema, required: true },
  title: { type: String, required: true },
  creator: {
    type: Schema.Types.ObjectId,
    ref: "HumanRootModel",
    immutable: true,
    required: true,
  },
  // ANALYTICS
  analyticsTimeline: {
    of: blogPostStatsSchema,
    type: Schema.Types.Map,
    default: () => ({}),
  },
  analyticsTotal: {
    type: blogPostStatsSchema,
    default: () => ({
      likesCount: 0,
      viewCount: 0,
    }),
  },
});

export default boringBlogPostSchema;
