import { IHumanRoot, ILocation, locationSchema } from "./1_HumanRoot";
import { contentBlockSchema, IContentBlock } from ".";
import { ForeignModel } from "../../Utils";
import { Schema } from "mongoose";

// TYPESCRIPT IDEA DEFINITION
// LIVE CHAT APPLICATION

interface IAnnouncement {
  content: IContentBlock;
  timestamp: Date;
  title: string;
}

interface ILocationEvent {
  announcements: Array<IAnnouncement>;
  admin: ForeignModel<IHumanRoot>;
  description: IContentBlock;
  location: ILocation;
  start: Date;
  end: Date;
}

const locationEventSchema = new Schema<ILocationEvent>({
  start: { type: Date, default: () => Date.now() },
  description: contentBlockSchema,
  location: locationSchema,
  admin: {
    type: Schema.Types.ObjectId,
    ref: "HumanRootModel",
  },
  announcements: [
    {
      content: contentBlockSchema,
      title: String,
      timestamp: {
        type: Date,
        default: () => Date.now(),
      },
    },
  ],
  end: {
    type: Date,
    default: () => {
      const d = new Date(Date.now());
      d.setDate(d.getDate() + 1);
      return d;
    },
  },
});

export default locationEventSchema;
