import { Schema } from "mongoose";

// CONTENT BLOCK INTERFACE AND SCHEMA DEFINITION

export enum EContentRenderType {
  TEXT = "TEXT",
  HTML = "HTML",
  IMG = "IMG",
  MD = "MD",
}

export interface IContentBlock {
  renderType: EContentRenderType;
  content: string;
  title: string;
  notes: string;
}

export const contentBlockSchema = new Schema<IContentBlock>({
  renderType: {
    default: EContentRenderType.TEXT,
    enum: EContentRenderType,
    type: String,
  },
  content: String,
  notes: String,
  title: String,
});
