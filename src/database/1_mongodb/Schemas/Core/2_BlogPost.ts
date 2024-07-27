import { ForeignModel } from "../../Utils";
import { Schema } from "mongoose";
import {
  DefaultMainLocation,
  locationSchema,
  IHumanRoot,
  ILocation,
} from "./1_HumanRoot";
import { contentBlockSchema, IContentBlock } from ".";

// 1. [X] TYPESCRIPT IDEA DEFINITION
// 2. [X] Schema Definition


enum EBlogPostVisibilityOptions {
  ONLY_SUBSCRIPTION = "ONLY_SUBSCRIPTION",
  PROTECTED = "PROTECTED",
  PRIVATE = "PRIVATE",
  PUBLIC = "PUBLIC",
}



interface IBlogPostComment {
  userName: string;
  message: string;
  timestamp: Date;
}

interface IBlogPostStats {
  likesCount: number;
  viewCount: number;
}

enum EBlogPostStandardSection {
  INTRODUCTION = "INTRODUCTION",
  MAIN_POSTER = "MAIN_POSTER",
  DESCRIPTION = "DESCRIPTION",
  CONCLUSION = "CONCLUSION",
  ABSTRACT = "ABSTRACT",
  SUMMARY = "SUMMARY",
}

export const MAX_NUM_ANALYTICS_INSTANCES: number = 20;

// MAIN
export interface IBlogPost {
  // MAIN CONTENT FIELDS : REQUIRED AT THE TIME OF CREATION
  creator: ForeignModel<IHumanRoot>;
  tags: { [key: string]: number };
  mainContentBlock: IContentBlock;
  contents: Array<IContentBlock>;
  location: ILocation;
  title: string;

  // PERFORMANCE MONITORING FIELDS
  analyticsTimeline: { [key: string]: IBlogPostStats };
  comments: Array<IBlogPostComment>;
  analyticsTotal: IBlogPostStats;

  // META DATA
  isPublic: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// SCHEMA DEFINITION

const blogPostCommentSchema = new Schema<IBlogPostComment>({
  userName: String,
  message: String,
  timestamp: Date,
});

const blogPostStatsSchema = new Schema<IBlogPostStats>({
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

const blogPostSchema = new Schema<IBlogPost>({
  // AUTOMATIC FIELDS
  location: { type: locationSchema, default: () => DefaultMainLocation },
  createdAt: { type: Date, default: () => Date.now(), immutable: true },
  comments: { type: [blogPostCommentSchema], default: () => [] },
  mainContentBlock: { type: contentBlockSchema, required: true },
  updatedAt: { type: Date, default: () => Date.now() },
  isPublic: { type: Boolean, default: true },
  title: String,
  tags: {
    default: () => ({ General: 100 }),
    type: Schema.Types.Map,
    of: Number,
  },
  contents: {
    type: [contentBlockSchema],
    validate: [(val: Array<any>) => val.length <= 30],
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: "HumanRootModel",
    immutable: true,
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

export default blogPostSchema;
