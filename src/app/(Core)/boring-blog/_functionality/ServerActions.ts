"use server";
import { getMainDBModels } from "@/database/1_mongodb/MainDB/Connection";
import { IHumanRoot } from "@/database/1_mongodb/Schemas/Core/1_HumanRoot";
import { ForeignModel } from "@/database/1_mongodb/Utils";
import { getServerSession } from "next-auth";

// PRIMITIVE SERVER ACTIONS
// CREATE NEW
export const createNewBoringBlogPost = async ({
  mainContentBlock_html,
  isPublic,
  abstract,
  creator,
  title,
  tags,
  loc_l0Planet,
  loc_l1Country,
  loc_l2State,
  loc_l3District,
  loc_l4Mandal,
  loc_lInfCity,
}: {
  creator: ForeignModel<IHumanRoot>;
  tags: { [key: string]: number };
  mainContentBlock_html: string;
  loc_l0Planet: string;
  loc_l1Country: string;
  loc_l2State: string;
  loc_l3District: string;
  loc_l4Mandal: string;
  loc_lInfCity: string;
  isPublic: boolean;
  abstract: string;
  title: string;
}) => {
  const { BoringBlogPostModel } = await getMainDBModels();
  const session = await getServerSession();
  if (!session) {
    return null;
  }
  await BoringBlogPostModel.create({
    abstract,creator,isPublic,tags,title,
  });
};

// DELETE EXISTING
export const deleteBoringBlogPost = async () => {
  const { BoringBlogPostModel } = await getMainDBModels();
};

// UPDATE EXISTING
export const updateBoringBlogPost = async () => {
  const { BoringBlogPostModel } = await getMainDBModels();
};

// JUST READ EXISTING
export const getAllBoringBlogPosts = async () => {
  const { BoringBlogPostModel } = await getMainDBModels();
};

export const getRecentBoringBlogPosts = async () => {
  const { BoringBlogPostModel } = await getMainDBModels();
};

export const getBoringBlogPostDetails_Public = async () => {
  const { BoringBlogPostModel } = await getMainDBModels();
};

export const getBoringBlogPostDetails_Owner = async () => {
  const { BoringBlogPostModel } = await getMainDBModels();
};

// FORM ACTIONS
// CREATE NEW
export const formAction_createNewBoringBlogPost = async () => {};
