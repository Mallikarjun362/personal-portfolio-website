import { ForeignModel } from "../../Utils";
import { IHumanRoot } from "./1_HumanRoot";
import { Schema } from "mongoose";

enum EContextPrimitiveDataTypes {
  PLAIN_TEXT = "PLAIN_TEXT",
  NUMBER = "NUMBER",
}

interface IBlogPostTemplate {
  author: ForeignModel<IHumanRoot>;
  isVerified: boolean;
  usageCount: number;
  title: string;
  // MAIN RESPONSIBILITY HANDLING ATTRIBUTES
  contextSchema: { [variable: string]: EContextPrimitiveDataTypes };
  htmlLayout: string;
  cssStyles: string;
}

const blogPostTemplateSchema = new Schema<IBlogPostTemplate>({
  usageCount: { type: Number, default: 0, min: 0 },
  isVerified: { type: Boolean, default: false },
  htmlLayout: { type: String, default: "" },
  contextSchema: { type: Map, of: String },
  cssStyles: { type: String, default: "" },
  title: { type: String, maxlength: 200 },
  author: {
    type: Schema.Types.ObjectId,
    ref: "HumanRootModel",
    required: true,
  },
});

export default blogPostTemplateSchema;
