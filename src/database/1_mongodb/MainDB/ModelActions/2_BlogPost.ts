import { ILocation } from "../../Schemas/Core/1_HumanRoot";
import { IBlogPost } from "../../Schemas/Core/2_BlogPost";
import { IContentBlock } from "../../Schemas/Core";
import { getMainDBModels } from "../Connection";
import { MyMongoDBModel } from "../../Utils";

// 1. [ ] Create
// 1. [ ] Update
// 1. [ ] Delete
export class BlogPostModelActions {
  static BlogPostModel: MyMongoDBModel<IBlogPost>;

  // =====================================================================================================
  static getModel = async (): Promise<MyMongoDBModel<IBlogPost>> => {
    if (!BlogPostModelActions.BlogPostModel) {
      const { BlogPostModel } = await getMainDBModels();
      BlogPostModelActions.BlogPostModel = BlogPostModel;
    }
    return BlogPostModelActions.BlogPostModel;
  };

  // =====================================================================================================
  static createNewBlogPost = async ({
    creatorDbId,
    contents,
    location,
    title,
    tags,
  }: {
    tags: { [key: string]: number };
    contents: Array<IContentBlock>;
    creatorDbId: string;
    location: ILocation;
    title: string;
  }) => {
    try {
      await (
        await this.getModel()
      ).create({
        creator: creatorDbId,
        contents: contents,
        location: {
          l3District: location.l3District,
          l1Country: location.l1Country,
          lInfCity: location.lInfCity,
          l4Mandal: location.l4Mandal,
          l0Planet: location.l0Planet,
          l2State: location.l2State,
        },
      });
    } catch (e) {
      return null;
    }
  };
}
